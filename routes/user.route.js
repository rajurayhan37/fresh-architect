const userController = require('../controllers/user.controller')
const middleware = require('../middleware/user.middleware')
const router =  require('express').Router()


router.post('/add-user', middleware.emailExist, userController.adduser)
router.get('/',middleware.checkAuth, userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.get('/email/:email', userController.checkUserEmail)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.post('/login', userController.userAuthenticattion)


module.exports = router;