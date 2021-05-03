const express = require("express");
const app = express();

const utils = require('./utils');

app.use(express.json());
app.use('/', require('./router/index'));


app.listen(3088, function () {
  console.log("server is up and running");
});