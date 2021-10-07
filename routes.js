const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('./helpers/auth');

const { registration, registrationForm } = require('./components/registration/controller');
const { loginForm } = require('./components/login/controller');
const { addNoteForm, addNote, allNotes, editNoteForm, editNote, deleteNote } = require('./components/notes/controller');

router.get('/registration', registrationForm);
router.post('/registration', registration);

router.get('/login', loginForm);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/allNotes',
  failureRedirect: '/error'
}));

router.get('/addNote', auth, addNoteForm);
router.post('/addNote', auth, addNote);
router.get('/allNotes', auth, allNotes);
router.get('/editNote/:id', auth, editNoteForm);
router.post('/editNote/:id', auth, editNote)
router.get('/deleteNote/:id', auth, deleteNote);

router.get('/error', (req, res) => {
  res.send('error')
})

module.exports = router;
