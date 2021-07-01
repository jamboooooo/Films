const controller = require('../controllers/genre.contoller')
const { Router } = require('express')
const router = Router()

router.get('/genre', controller.getGenre)
router.post('/genre', controller.addGenre)

module.exports = router