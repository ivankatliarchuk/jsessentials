const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.findOneAndRemove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('59e389e4d2dcdd53f2c34d6d').then((result) => {

});