const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

fs.writeFileAsync(__dirname + '/notes.json', JSON.stringify(originalNote, null, 2), 'utf8').then(
    () => { console.log('Write data'); },
    (err) => { throw err; }
);

let noteString = fs.readFileAsync(__dirname + '/notes.json', 'utf8').then(
    (data) => { console.log('Read data', JSON.parse(data)); },
    (err) => { throw err; }
);

