let express = require('express');
let app = express();
var bodyParser = require('body-parser');

let mongocontroller = require('./controllers/mongocontroller');
let mysqlontroller = require('./controllers/mysqlcontroller');
let htmlcontroller = require('./controllers/htmlcontroller');

let port = process.env.PORT || 3000;
let jsonParser = bodyParser.json();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(jsonParser);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

// curl -d '{"firstname":"John", "lastname":"Doe"}' -H "Content-Type: application/json" -X POST http://localhost:3000/person
// urlencodedParser -> jsonparser can be used insted

htmlcontroller(app);
mongocontroller(app);
mysqlontroller(app);

app.listen(port);

