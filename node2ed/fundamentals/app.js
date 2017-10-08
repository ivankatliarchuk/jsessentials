console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs
    .command('add', 'Add new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'The body if the node',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help().argv;

let command = process.argv[2];

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
