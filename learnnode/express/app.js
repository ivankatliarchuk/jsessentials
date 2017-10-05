let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let port = process.env.PORT || 3000;
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();
app.use(jsonParser);
app.use('/assets', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function (reg, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});

app.get('/api', function (reg, res) {
    res.json({ firstname: 'John', lastname: 'Doe' })
});

// curl -d '{"firstname":"John", "lastname":"Doe"}' -H "Content-Type: application/json" -X POST http://localhost:3000/person
app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
})

app.listen(port);

