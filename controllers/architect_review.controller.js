const db = require('../models')

//model
const ArchitectReview = db.architect_reviews

//functionality

//Add review

const addReview = async (req, res) => {
    
    let data = {
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await ArchitectReview.create(data)
    res.status(200).send(review)
}

//get All review

const getAllReview = async (req, res) => {

    const reviews = await ArchitectReview.findAll({})
    res.status(200).send(reviews)
}


module.exports = {
    addReview,
    getAllReview,
}