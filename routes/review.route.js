const controllers = require('../controllers/review.controller')
const { Router } = require('express')
const router = Router()

router.get('/review/:id', controllers.getReviewById)
router.post('/review/:id', controllers.addReview)

module.exports = router