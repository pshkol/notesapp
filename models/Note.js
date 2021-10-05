const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  userId: {
    type: String,
    require: true
  }
})

module.exports = model('Note', noteSchema)
