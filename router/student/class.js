const express = require('express');
const router = express.Router();

router.get("/get-my-classes", function (req, res) {
  res.json({ msg: "A list of all the classes" });
});

router.get("/:id", function (req, res) {
  res.json({ msg: "You are requesting the class"+req.params.id });
});

module.exports = router;