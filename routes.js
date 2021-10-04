const express = require('express');
const router = express.Router();
const passport = require('passport');

const { registration, registrationForm } = require('./components/registration/controller');
const { loginForm } = require('./components/login/controller');

router.get('/registration', registrationForm);
router.post('/registration', registration);

router.get('/login', loginForm);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/notes',
  failureRedirect: '/error'
}));

router.get('/notes', (req, res) => {
  res.send('notes');
})

router.get('/error', (req, res) => {
  res.send('error')
})

module.exports = router;
