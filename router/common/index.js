const express = require("express");
const router = express.Router();

router.get("/animated", function (req, res) {
  res.render("animated", { layout: "animated", name: req.query.name });
});

router.get("/", function (req, res) {
  const todos = [
    {
      todo: "Get milk",
      completed: true,
    },
    {
      todo: "Get eggs",
      completed: false,
    },
    {
      todo: "Get bread",
      completed: false,
    },
  ];
  res.render("index", { layout: "main", todos });
});

module.exports = router;
