let mysql = require('mysql');

// TODO create table

module.exports = function (app) {

	let connection = mysql.createConnection({
		host: "172.16.11.5",
		user: "nodejs",
		password: "nodejs",
		database: "nodejs"
	});
	
	// curl -X GET http://localhost:3000/mysql/person/1
	app.get('/mysql/person/:id', function (req, res) {
		// get that data from database
		connection.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID',
			function (err, rows) {
				if (err) throw err;
				console.log(rows[0].Firstname);
				res.json({ firstname: 'John', lastname: 'Doe' });
			}
		);
	});

	app.post('/mysql/person', function (req, res) {
		// save to the database
	});

	app.delete('/mysql/person/:id', function (req, res) {
		// delete from the database
	});

}