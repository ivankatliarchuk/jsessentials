const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

let id = '59e33fe20ea8cb2c2a657f34';

if (!ObjectID.isValid(id)) {
    console.log('Id not valie');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById({
    _id: '59e33fe20ea80b2c2a657f31'
}).then((todo) => {
    if (!todo) {
        return console.log('Object not found');
    }
    console.log('Todo', todo);
});