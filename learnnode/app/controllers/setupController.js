let Todos = require('../models/totoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        let starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos).then(
            (results) => { res.json(results) },
            err => { console.log(`Not able to create ${err.code} ${err.message}`) }
        );
    })
}