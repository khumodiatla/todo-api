const router = require('express').Router();
const TodoController = require('../controllers/Todo');
const authenticateUser =  require('../middlewares/authenticateUser');

const todoController = new TodoController();

router.post('/todos', authenticateUser, todoController.createTodo);
router.get('/todos/:todoId', authenticateUser, todoController.getTodoById); 
router.get('/todos', authenticateUser, todoController.getTodos);
router.put('/todos/:todoId', authenticateUser, todoController.updateTodo);
router.delete('/todos/:todoId', authenticateUser, todoController.deleteTodo);

module.exports = router;