const router = require('express').Router();
const TodoController = require('../controllers/Todo');
const authenticateUser =  require('../middlewares/authenticateUser');

const todoController = new TodoController();

router.post('/todos', authenticateUser, todoController.createTodo);

module.exports = router;