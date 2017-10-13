//const MmongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// object destructuring
let user = { name: 'andrew', age: 25 };
let { name } = user;

// create object id
let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://172.16.11.6:27017/nodejs', (err, db) => {
    if (err) {
        console.error(`Unable to connect to mongo db ${err}`);
    } else {
        console.log('Connected to db');
    }

    db.collection('Todos').insertOne({
        text: 'Something is need to be done',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.error(`Unable to save ${err}`);
        } else {
            return console.log(JSON.stringify(result.ops, undefined, 2));
        }
    });

    db.collection('Users').insertOne({
        name: 'John Doe',
        age: 25,
        location: 'Nottingham'
    }, (err, result) => {
        if (err) {
            return console.error(`Unable to save ${err}`);
        } else {
            return console.log(JSON.stringify(result.ops, undefined, 2));
        }
    });

    db.close();
});