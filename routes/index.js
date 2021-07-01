// const filmController = require('film.route')
// const genreController = require('genre.route')
// const reviewController = require('review.route')
// const { Router } = require('express')
// const router = Router()
//
// router.use(filmController)
// router.use(genreController)
// router.use(reviewController)
//
// module.exports = router


const { Router } = require('express')
const router = Router()

router.use(require('./film.route'))
router.use(require('./genre.route'))
router.use(require('./review.route'))

module.exports = router


