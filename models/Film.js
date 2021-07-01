const mongoose = require('mongoose')
const FilmSchema = mongoose.Schema({
  name: String,
  description: String,
  img: String,
  genre: {
    ref: 'Genre',
    type: mongoose.Schema.Types.ObjectId
  }
})
module.exports = mongoose.model('Film', FilmSchema)