console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];
// console.log('Yargs', argv);

switch (command) {
    case 'add':
        // node app.js add --title=secret --body="This is my secret"
        notes.addNote(argv.title, argv.body).then((data) => {
            console.log("Note created", data.title);
        },
            (err) => { console.error('Not not created:', err.message); }
        );
        break;
    case 'list':
        // node app.js list
        notes.getAll(argv.title).then((data) => {
            console.log(`Notes Found\n${JSON.stringify(data, null, 2)}`);
        },
            (err) => { console.error('Not not found:', err.message); }
        );
        break;
    case 'read':
        // node app.js read --title first
        notes.getNote(argv.title).then((data) => {
            console.log(`Note Found\n${JSON.stringify(data, null, 2)}`);
        },
            (err) => { console.error('Not not found:', err.message); }
        );
        break;
    case 'remove':
        notes.remove(argv.title).then((data) => {
            console.log("Note removed", data);
        },
            (err) => { console.error('Note not removed:', err.message); }
        );
        break;
    default:
        console.log('Command not recognized');
}
