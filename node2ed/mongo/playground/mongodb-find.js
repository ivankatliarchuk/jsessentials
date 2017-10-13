const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://172.16.11.6:27017/nodejs', (err, db) => {
    if (err) {
        console.error(`Unable to connect to mongo db ${err}`);
    } else {
        console.log('Connected to db');
    }

    db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
        console.log('Query by completed');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find({
        _id: new ObjectID('59e067988c987564bc032ac5')
    }).toArray().then((docs) => {
        console.log('Query by ID');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log('Query count TODOS:', count);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({ name: 'Andrew' }).toArray().then((docs) => {
        console.log('Query Users');
        console.log(JSON.stringify(docs, undefined, 2));
    });

    db.close();
});