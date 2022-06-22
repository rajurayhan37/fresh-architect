const architectController = require('../controllers/architect.controller')
const middleware = require('../middleware/architect.middleware')
const router =  require('express').Router()


router.post('/add', middleware.emailExist, architectController.addArchitect)
router.get('/all', architectController.getAllArchitect)
router.post('/login', architectController.userAuthenticattion)


module.exports = router;