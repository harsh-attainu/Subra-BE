const express = require("express");
const app = express();
const session = require('express-session');
const path = require('path');
const cookie = require('cookie-parser');
const handlebars = require('express-handlebars');

app.use(session({
  secret: 'this is my secret session password',
}))

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  extname: 'hbs',
  layoutDir:  path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
}));

app.use(cookie('This is a very secret cookie string'));

app.use('/files', express.static('uploads'));

app.use(express.json());

app.use('/', require('./router/index'));


app.listen(3088, function () {
  console.log("server is up and running at 3088");
});