const Todo = require('../models/Todo');

class TodoService {
    async getTodoById(todoId){
        return await Todo.findById(todoId);
    }

    async createTodo(todoInput){
        return await Todo.create(todoInput);
    } 

    async getTodos(){
        return await Todo.find();
    }

    async updateTodo(todoId, todoInput){
        return await Todo.updateOne({ _id: todoId}, todoInput);
    }
}

module.exports = TodoService;