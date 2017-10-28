const
    _ = require('lodash'),
    express = require('express'),
    bodyParser = require('body-parser'),
    { ObjectID } = require('mongodb');

const
    { mongoose } = require('./db/mongoose'),
    { Todo } = require('./models/todo'),
    { User } = require('./models/user'),
    { authenticate } = require('./middleware/authenticate');

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

// USERS
/*
curl -X POST \
  http://localhost:3000/users \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"email": "andrewabc@example.com",
    "password": "abc234#"    
}'
{
	"email": "andrew@example.com",
	"password": "1234qwe"
}
Header
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWU1YWJhMjg5NGI1ZjMxOGZlMjU4OTAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA4MjIzOTA2fQ.xmV5lCrZ9UEugt2Cg-4t6JQXeIbUu99S6qHQz61kq_0
*/
app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    let user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).status(201).json(user);
    }).catch((error) => {
        res.status(400).send(error);
    });
});


app.get('/users/me', authenticate, (req, res) => {
    res.status(200).json(req.user);
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };