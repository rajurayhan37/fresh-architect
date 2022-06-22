const contactusController = require('../controllers/contactus.controller')
const router =  require('express').Router()


router.post('/store', contactusController.storeUserMessage)
router.get('/show', contactusController.getUserMessage)


module.exports = router;