let mongoose = require('mongoose');

let mongodb = 'mongodb://172.16.11.6:27017/nodejs'
mongoose.connect(mongodb, {
	useMongoClient: true
});

// get default connection
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
	firstname: 'John',
	lastname: 'Doe',
	address: '555 Main St.'
});

// save the user
john.save(function (err) {
	if (err) throw err;

	console.log('person saved!');
});

var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '555 Main St.'
});

// save the user
jane.save(function (err) {
	if (err) throw err;

	console.log('person saved!');
});

// curl -X GET http://localhost:3000/mongo/person/1
module.exports = function (app) {

	app.get('/mongo/person/:id', function (req, res) {
		// get that data from database
		Person.find({}, function(err, users) {
			if (err) throw err;
			
			// object of all the users
			console.log(users);
			res.json(users);
		});
		
	});

	app.post('/mongo/person', function (req, res) {
		// save to the database
	});

	app.delete('/mongo/person/:id', function (req, res) {
		// delete from the database
	});

}