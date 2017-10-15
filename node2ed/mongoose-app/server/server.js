const
    _ = require('lodash'),
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

app.get('/todos/:id', (req, res) => {
    let { id } = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).json();
    }
    Todo.findById({
        _id: id
    }).then((todo) => {
        if (!todo) {
            return res.status(404).json();
        }
        return res.status(200).json({ todo })
    }).catch((err) => {
        return res.status(400).json();
    });
});

app.delete('/todos/:id', (req, res) => {
    let { id } = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).json();
    }
    Todo.findByIdAndRemove(id).then((result) => {
        if (!result) {
            return res.status(404).json();
        }
        return res.status(204).json();
    }).catch((error) => res.status(404).end());
});

app.patch('/todos/:id', (req, res) => {
    let { id } = req.params;
    let body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).json();
    }
    if (_.isBoolean(body.completed) && body.completed) {
        // if booleand and is true
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((result) => {
        if (!result) {
            return res.status(404).send();
        }
        return res.status(200).json({ todo: result });
    }).catch((error) => {
        return res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };