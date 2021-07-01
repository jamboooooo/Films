const controller = require('../controllers/film.controller')
const { Router } = require('express')
const router = Router()

router.get('/films', controller.getFilm)
router.post('/films/:id', controller.addFilm)
router.get('/films/:id', controller.getFilmByIdGenre)
router.get('/film/:id', controller.getFilmById)

module.exports = router