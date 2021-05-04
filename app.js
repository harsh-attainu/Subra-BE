const express = require("express");
const app = express();
const session = require('express-session');
const cookie = require('cookie-parser');

app.use(session({
  secret: 'this is my secret session password',
}))
app.use(cookie('This is a very secret cookie string'));
app.use(express.json());
app.use('/', require('./router/index'));


app.listen(3088, function () {
  console.log("server is up and running");
});