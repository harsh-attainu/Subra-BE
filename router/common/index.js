const express = require('express');
const router = express.Router();
const utils = require('../../utils');


router.get("/", function (req, res) {
  const a = 5;
  const b = 10;
  const c = utils.multiply(a,b);
  res.json({ msg: c });
});

module.exports = router;