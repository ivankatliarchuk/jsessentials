let Todos = require('../models/totoModel');
let bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        Todos.find({ username: req.params.uname }).then(
            (results) => { res.json(results) },
            err => { console.log(`Not able to create ${err.code} ${err.message}`) }
        )
    });

    app.get('/api/todo/:id', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        Todos.findById({ _id: req.params.id }).then(
            (results) => { res.json(results) },
            err => { console.log(`Not able to create ${err.code} ${err.message}`); throw err; }
        )
    });

    app.post('/api/todo', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        if (req.body.id) {            
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }).then(
                (results) => { res.json(results) },
                err => { console.log(`Not able to update ${err.code} ${err.message}`); throw err; }
                );
        } else {            
            let newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save().then(
                (results) => { res.json(results); },
                err => { console.log(`Not able to save ${err.code} ${err.message}`); throw err; }
            );
        }
    });

    app.delete('/api/todo/:id', function (req, res) {
        Todos.findByIdAndRemove(req.params.id).then(
            (results) => { res.json({ message: `Removed with _id ${req.params.id}` }) },
            err => { console.log(`Not able to delete ${err.code} ${err.message}`); throw err; }
        );
    })
}