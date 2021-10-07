const Note = require('../../models/Note')

async function allNotes(req, res) {
  const notes = await Note.find({userId: req.user._id})
  res.render('allNotes', {tituloPagina: 'Notas', notes})
}

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
      userId: req.user._id
    })

    await newNote.save();
    res.redirect('allNotes');
  }
}

function editNoteForm(req, res) {
  res.render('editNote', {tituloPagina: 'Modificar nota', id: req.params.id});
}

async function editNote(req, res) {
  const id = req.params.id || null;
  const title = req.body.title;
  const text = req.body.text;

  if (id !== null) {
    await Note.findOneAndUpdate({_id: id}, {title, text});
    res.redirect('/allNotes')
  } else {
    res.redirect('/error');
  }
}

async function deleteNote(req, res) {
  const id = req.params.id || null;

  if (id !== null) {
    await Note.findByIdAndDelete(id);
    res.redirect('/allNotes');
  } else {
    res.redirect('/error');
  }
}

module.exports = {
  allNotes,
  addNoteForm,
  addNote,
  editNoteForm,
  editNote,
  deleteNote
}
