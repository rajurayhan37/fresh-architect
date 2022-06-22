const customerController = require('../controllers/customer.controller')
const middleware = require('../middleware/customer.middleware')
const router =  require('express').Router()


router.post('/add', middleware.emailExist, customerController.addCustomer)
router.get('/all', customerController.getAllCustomer)
router.post('/login', customerController.userAuthenticattion)


module.exports = router;