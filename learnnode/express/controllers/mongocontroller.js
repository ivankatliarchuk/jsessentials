let mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@172.16.11.6:27017/nodejs');

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


module.exports = function (app) {

	app.get('/mongo/person/:id', function (req, res) {
		// get that data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});

	app.post('/mongo/person', function (req, res) {
		// save to the database
	});

	app.delete('/mongo/person/:id', function (req, res) {
		// delete from the database
	});

}