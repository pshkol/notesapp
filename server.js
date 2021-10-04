const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport');

require('./passport');

const config = require('./config');
const db = require('./db.js');
const router = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'my_secret',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(config.port, (req, res) => {
  console.log(`El servidor esta trabajando en el puerto ${config.port}`);
})
