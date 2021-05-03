const express = require('express');
const router = express.Router();

router.get("/getall", function (req, res) {
  res.json({ msg: "All classes created by you" });
});

router.post("/create", function (req, res) {
  console.log(req.body)
  res.status(501).json({ msg: "Created new class" });
});

router.get("/:id", function (req, res) {
  res.json({ msg: "You are requesting the class"+req.params.id });
});

module.exports = router;