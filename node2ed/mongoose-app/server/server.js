const mongoose = require('mongoose');
const config = require('../config');
const { Schema } = mongoose;

mongoose.Promise = require('bluebird');
mongoose.connect(config.getDbConnectionString(),
    {
        useMongoClient: true
    }).then(() => {
        console.log('Connection Established')
    }).catch((err) => {
        console.log(`Not able to connect ${err.code} ${err.message}`)
    });

const todosSchema = new Schema({
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

const Todo = mongoose.model('Todos', todosSchema);

// let newTodo = new Todo({
//     text: 'Cook dinner',
//     completed: false,
//     completedAt: 1234
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }).catch((error) => {
//     console.error('Unable to save', error);
// });

let otherTodo = new Todo({
    
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}).catch((error) => {
    console.error('Unable to save', error);
});

