const express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.status(404)
        .json({
            error: 'Page not found',
            status: 404
        })
});

// GET /users
app.get('/users', (req, res) => {
    res.json([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Jen',
        age: 25
    }, {
        name: 'Andrew',
        age: 26
    }]);
});
// Give users a name prop and age prop

//app.listen(3000);

module.exports.app = app;