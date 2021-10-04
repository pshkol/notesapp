let errors = [];

const bcrypt = require('bcrypt');

const User = require('../../models/User');

function loginForm(req, res) {
  res.render('login', {tituloPagina: 'Login', errors})
}

module.exports = {
  loginForm
}
