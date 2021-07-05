const Review = require('../models/Review')

const addReview = async(req, res) => {
    try {
        const review = await new Review({
            authorName: req.body.authorName,
            text: req.body.text,
            film: req.params.id
        })
        review.save()
        res.json('Отзыв опубликован')
    } catch (e) {
        console.log(e.message)
    }
}

const getReviewById = async(req, res) => {
    const review = await Review.find({ film: req.params.id })

    if (review.length === 0) {
        res.json('Отзывов нет')
    } else {
        res.json(review)
    }
}
module.exports = {
    addReview,
    getReviewById
}