const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://172.16.11.6:27017/nodejs', (err, db) => {
    if (err) {
        console.error(`Unable to connect to mongo db ${err}`);
    } else {
        console.log('Connected to db');
    }

    // delete many
    db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        console.log('Delete multiple');
        console.log(result);
    });
    
    // delete one
    db.collection('Todos').deleteOne({ text: 'IBM' }).then((result) => {
        console.log('Delete one');
        console.log(result);
    });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({ text: 'Interest' }).then((result) => {
        console.log('Delete one');
        console.log(result);
    });

    db.close();
});