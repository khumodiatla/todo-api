const TodoService = require('../services/Todo');

const todoService = new TodoService();

class TodoController {
    async createTodo(req, res){
        try {
            const { title, description, completed, dueDate, priority } =  req.body;
    
            //  Check if all fields are the
            if(!title || !description || !completed || !dueDate || !priority){
                console.error('All the fields are required');
                return res.status(400).json({error: 'All the fields are required'});
            }
    
            const userId =  req.userId
            if (userId) {
                const todoInput = {
                    userId,
                    title,
                    description,
                    completed,
                    dueDate,
                    priority
                }
        
                const todo = await todoService.createTodo(todoInput)
    
                return res.status(201).json(todo);
            }
        } catch (error) {
            console.error('Error while creating a todo: ', error);
            return res.status(500).json({ error: 'Internal Server error'});
        }
    }

    async getTodoById(req, res) {
        try {
            const todoId = req.params.todoId;
            // Todo: Change how todoId is validated
            if(!todoId) {
                console.error('Invalid Todo Id');
                return req.status(400).json({ error: 'Todo not found'});
            }

            const userId = req.userId;
            if(userId) {
                const todo  = await todoService.getTodoById(todoId);

                if(!todo){
                    console.error('Todo with provide TodoId not found');
                    return res.status(404).json({ error: 'Todo not found'});
                }

                return res.json(todo);
            }        
        } catch (error) {
            console.error('Error while getting a Todo: ', error);
            return res.status(500).json({ error: 'Internal Server error'});
        }
    }
}

module.exports = TodoController;