const
    express = require('express'),
    bodyParser = require('body-parser');

let
    { mongoose } = require('./db/mongoose'),
    { Todo } = require('./models/todo'),
    { User } = require('./models/user');

let app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);

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
    console.log('Not yet implemented');
});

// app.listen(3000, () => {
//     console.log('Started on port 3000');
// });

module.exports = { app };