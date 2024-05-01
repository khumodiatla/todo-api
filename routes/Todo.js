const router = require('express').Router();
const TodoController = require('../controllers/Todo');
const authenticateUser =  require('../middlewares/authenticateUser');

const todoController = new TodoController();

router.post('/todos', authenticateUser, todoController.createTodo);
router.get('/todos/:todoId', todoController.getTodoById); // Add auth

module.exports = router;