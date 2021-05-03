const checkToken = function (req, res, next) {
    console.log("inside middleware");
    console.log("body", req.body);
    console.log("params", req.params);
    console.log("query", req.query);
    if (req.headers.token && req.headers.token == "this_is_the_secret_token") {
      console.log("token correct");
      next();
    } else {
      console.log("token incorrect");
      res.status(401).send({ error: "You are not authorized" });
    }
  }

module.exports = {checkToken};