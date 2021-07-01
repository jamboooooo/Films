const mongoose = require('mongoose')
const ReviewSchema = mongoose.Schema({
    authorName: String,
    text: String,
    film: {
      ref: 'Film',
      type: mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('Review', ReviewSchema)