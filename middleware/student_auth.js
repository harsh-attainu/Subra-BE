const jwt = require("jsonwebtoken");

const checkToken = async function (req, res, next) {
  console.log("inside studetn middleware")
  if (req.headers.authorization) {
    try {
      let result = await jwt.verify(
        req.headers.authorization,
        "this is a very secret key"
      );
      if (result) {
        req.user = result;
        next();
      } else res.status(401).json({ err: "Invalid token" });
    } catch (e) {
      res.status(401).json({ err: e });
    }
  } else res.status(401).json({ err: "Send token" });
  }

module.exports = {checkToken};