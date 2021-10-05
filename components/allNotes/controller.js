const Note = require('../../models/Note')

async function allNotes(req, res) {
  const notes = await Note.find({userId: req.user._id})
  res.render('allNotes', {tituloPagina: 'Notas', notes})
}

module.exports = {
  allNotes
}
