const
    express = require('express'),
    bodyParser = require('body-parser'),
    { ObjectID } = require('mongodb');

const
    { mongoose } = require('./db/mongoose'),
    { Todo } = require('./models/todo'),
    { User } = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    let { body } = req;
    let todo = new Todo({
        text: body.text
    });

    todo.save()
        .then((doc) => {
            res.status(201).json(doc);
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).json({ todos: todos });
    }).catch((error) => res.status(400).json({ error: err.message }));
});

app.get('/todo/:id', (req, res) => {
    let { id } = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).json();
    }
    Todo.findById({
        _id: id
    }).then((todo) => {
        if (!todo) {
            return res.status(400).json();
        }
        return res.status(200).json({ todo })
    }).catch((err) => {
        return res.status(400).json();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };