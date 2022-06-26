//importing controllers
const architectController = require('../controllers/architect.controller')
const architectReviewController = require('../controllers/architect_review.controller')
//importing middleware
const middleware = require('../middleware/architect.middleware')
const router =  require('express').Router()


router.post('/add', middleware.emailExist, architectController.addArchitect)
router.post('/upload/:id',architectController.upload.single('image'), architectController.uploadImage)
router.get('/all', architectController.getAllArchitect)
router.post('/login', architectController.userAuthenticattion)

//Route for Review

router.post('/review/add', architectReviewController.addReview)
router.get('/review/', architectReviewController.getAllReview)
router.get('/reviews/', architectController.getArchitectWithReview)

module.exports = router;