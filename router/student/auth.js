const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const user = {
  id:1,
  email:'harsh@gmail.com',
  password: '123'
}

router.post("/login", async function (req, res) {
    console.log(req.body); //this will work
    if (req.body.email && req.body.password) {
      if (req.body.email == user.email && req.body.password == user.password) {
        let token = await jwt.sign({id: user.id}, 'this is a very secret key')
        res.cookie('token', token, {maxAge:999999999}).json({ msg: "Success", token: token });
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

module.exports = router;