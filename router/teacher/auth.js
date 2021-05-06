const express = require('express');
const router = express.Router();

const user = {
  id:1,
  email:'harsh@gmail.com',
  password: '123'
}

router.post("/login", function (req, res) {
    if (req.body.email && req.body.password) {
      if (req.body.email == user.email && req.body.password == user.password) {
        req.session.user = {
          id:user.id,
          logged_in:true
        };
        res.json({ msg: "Success" });
      } else {
        res.status(401).send({ error: "ID/PW do not match" });
      }
    } else {
      res.status(400).send({ error: "Send both email and password" });
    }
  });

  router.post("/signup", function (req, res) {
    console.log(req.body); //this will work
    if (req.body.email && req.body.password) {
      if (req.body.email == "harsh@gmail.com" && req.body.password == "123") {
        res.json({ msg: "Success", token: "this_is_the_secret_token" });
      } else {
        res.status(401).send({ error: "ID/PW do not match" });
      }
    } else {
      res.status(400).send({ error: "Send both email and password" });
    }
  });

  router.all('/logout', function(req, res) {
    req.session.destroy();
    res.json({code:'success logout'});
  });

  router.post("/signup2", function (req, res) {
    if(req.body.email) {
      res.send('<html><h1>Signup succesffull</h1></html>');
    } else {
      res.send('<html>Email problem</html>');
    }
  });

module.exports = router;