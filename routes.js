const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('./helpers/auth');

const { registration, registrationForm } = require('./components/registration/controller');
const { loginForm } = require('./components/login/controller');
const { addNoteForm, addNote } = require('./components/addNote/controller');
const { allNotes } = require('./components/allNotes/controller');

router.get('/registration', registrationForm);
router.post('/registration', registration);

router.get('/login', loginForm);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/allNotes',
  failureRedirect: '/error'
}));

router.get('/addNote', auth, addNoteForm);
router.post('/addNote', auth, addNote);
router.get('/allNotes', auth, allNotes)

router.get('/error', (req, res) => {
  res.send('error')
})

module.exports = router;
