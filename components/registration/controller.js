const bcrypt = require('bcrypt');

const User = require('../../models/User');

let errors = [];

function registrationForm(req, res) {
  res.render('registration', {tituloPagina: 'Registracion', errors});
}

function registration(req, res) {
  errors = [];

  if (!req.body.email) {
    errors.push('El campo de "correo electronico" no fue completado');
  }

  if (!req.body.password) {
    errors.push('El campo de "Contrasena" no fue completado');
  }

  if (!req.body.passwordTwo) {
    errors.push('El campo de "Repita la contrasena" no fue completado');
  }

  if (req.body.password && req.body.password && req.body.password !== req.body.passwordTwo) {
    errors.push('Las contrasenas no coinciden');
  }

  if (errors.length > 0) {
    res.render('registration', {tituloPagina: 'Registracion', errors})
  } else {
    bcrypt.hash(req.body.password, 5, async (err, hash) => {
      const user = new User({
        email: req.body.email,
        password: hash
      })

      await user.save();
      res.redirect('login');
    })
  }
}

module.exports = {
  registrationForm,
  registration
}
