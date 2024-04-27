const router = require('express').Router();
const UserController = require('../controllers/User');

const userController = new UserController();

router.post('/users/signup', userController.SignUp);

module.exports = router;