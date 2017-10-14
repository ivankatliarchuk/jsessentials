const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://172.16.11.6:27017/nodejs', (err, db) => {
    if (err) {
        console.error(`Unable to connect to mongo db ${err}`);
    } else {
        console.log('Connected to db');
    }

    db.collection('Todos').find().count().then((count) => {
        console.log('Query count TODOS:', count);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos')
        .findOneAndUpdate({
            text: "IBM"
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log('Find and update completed');
            console.log(JSON.stringify(result, undefined, 2));
        }).catch((err) => {
            console.log('Unable to fetch todos', err);
        });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('59e1f0a5710fd4d304fc2b2f')
        }, {
            $set: {
                name: 'John JamesBond 007'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log('Error when updated', error);
        });

    db.close();
});