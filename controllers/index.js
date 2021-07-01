const {
  addGenre,
  getGenre
} = require('genre.contoller')
const {
  getFilm,
  addFilm,
  getFilmById,
  getFilmByIdGenre
} = require('film.controller')
const {
  getReviewById,
  addReview
} = require('review.controller')

module.exports = {
  addGenre,
  getGenre,
  getFilm,
  getFilmByIdGenre,
  addFilm,
  getReviewById,
  addReview,
  getFilmById
}