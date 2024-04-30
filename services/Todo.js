const Todo = require('../models/Todo');

class TodoService {
    async getTodoById(todoId){
        return await Todo.findById(todoId);
    }

    async createTodo(todoInput){
        return await Todo.create(todoInput);
    } 
}

module.exports = TodoService;