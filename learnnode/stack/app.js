var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/assets', express.static(__dirname + '/public'));

let people = [
	{
		name: 'John Doe'
	},
	{
		name: 'Jane Doe'
	},
	{
		name: 'Jim Doe'
	}
]

app.get('/', function (req, res) {
	res.render('index', { serverPeople: people });
});

app.listen(port);