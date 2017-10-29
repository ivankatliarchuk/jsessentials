'use strict';
const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
    {
        _id: userOneId,
        email: "andrew@example.com",
        password: 'userOnePass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
        }]
    }, {
        _id: userTwoId,
        email: 'jem@exampl.com',
        password: 'userTwoPassword',
        tokens: [{
            access: 'auth',
            token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'abc123').toString()
        }]
    }
];

const todos = [
    {
        _id: new ObjectID(),
        text: 'First text todo',
        _creator: userOneId
    }, {
        _id: new ObjectID(),
        text: 'Second text todo',
        completed: true,
        completedAt: 453234,
        _creator: userTwoId
    }
];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo]);
    }).then(() => {
        done();
    });
};

const populateToDos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => {
        done();
    });
};

module.exports = { todos, populateToDos, users, populateUsers };
