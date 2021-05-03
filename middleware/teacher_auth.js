const checkToken = function (req, res, next) {
    if (req.headers.token && req.headers.token == "this_is_the_secret_token") {
      console.log("token correct");
      next();
    } else {
      console.log("token incorrect");
      res.status(401).send({ error: "You are not authorized" });
    }
  }

module.exports = {checkToken};