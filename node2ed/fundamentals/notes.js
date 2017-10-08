console.log('Starting notes.js');

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };
    fs.readFileAsync(__dirname + '/notes.json', 'utf8').then(
        (data) => {
            if (data) {
                return JSON.parse(data);
            } else {
                return [];
            }
        },
        (err) => { throw err; }
    ).then(
        (data) => {
            data.push(note);
            return data;
        }
    ).then(         
        (data) => {
            console.log(data);
            return data;
        }
    ).then(
        (data) => {            
            fs.writeFileAsync(__dirname + '/notes.json', JSON.stringify(data, null, 2), 'utf8').then(
                () => { console.log('Suceed'); },
                (err) => { throw err; }
            );
        }
    ).catch(console.error);
};

let getAll = () => {
    console.log('Geggint all notes');
    return null;
};

let getNote = (title) => {
    console.log('Found note', title);
};

let remove = (title) => {
    console.log('Remove note', title);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    remove: remove
}
