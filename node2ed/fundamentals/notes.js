console.log('Starting notes.js');

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

let fetchNotes = new Promise((resolve, reject) => {
    fs.readFileAsync(__dirname + '/notes.json', 'utf8').then((data) => {
        data ? resolve(JSON.parse(data)) : [];
    })
});

let saveNotes = (notes) => {
    new Promise((resolve, reject) => {
        fs.writeFileAsync(__dirname + '/notes.json', JSON.stringify(notes, null, 2), 'utf8', (err) => {
            if (err) reject(err);
            else resolve(JSON.stringify(notes, null, 4));
        });
    })
};

let addNote = (title, body) => {
    let note = {
        title,
        body
    };
    fetchNotes.then((data) => {
        // filter notes
        let duplicates = data.filter((note) => {
            return note.title === title;
        });
        if (duplicates.length > 0) {
            throw Error('duplicate note found');
        }
        return data;
    }).then((data) => {
        data.push(note);
        return data;
    }).then(saveNotes).then((json) => {
        if (json) {
            console.log('Succeed');
        } else {
            console.log('No data written');
        }
    }).catch((err) => {
        console.log('Error', err.message);
    });
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
