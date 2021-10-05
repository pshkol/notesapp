const Note = require('../../models/Note');

function addNoteForm(req, res) {
  res.render('addNote', {tituloPagina: 'Agregar nota'});
}

async function addNote(req, res) {
  if (!req.body.title || !req.body.text) {
    res.redirect('error');
  } else {
    const newNote = new Note({
      title: req.body.title,
      text: req.body.text,
      UserId: req.user._id
    })

    await newNote.save();
    res.redirect('allNotes');
  }
}

module.exports = {
  addNoteForm,
  addNote
}
