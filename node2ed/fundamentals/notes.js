console.log('Starting notes.js');

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

let fetchNotes = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFileAsync(`${__dirname}/${file}`, 'utf8').then((data) => {
            data ? resolve(JSON.parse(data)) : [];
        },
            (err) => { console.log('Error'); }
        )
    })
};

let saveNotes = (file) => {
    return (notes) => {
        return new Promise((resolve, reject) => {
            fs.writeFileAsync(`${__dirname}/${file}`, JSON.stringify(notes, null, 2), 'utf8', (err) => {
                if (err) reject(err);
                else resolve(JSON.stringify(notes, null, 4));
            });
        })
    };
};

let addNote = (title, body) => {
    let note = {
        title,
        body
    };
    let result = [];
    return fetchNotes('notes.json').then((data) => {
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
    }).then(saveNotes('notes.json')).then((json) => {
        if (json) {
            console.log('Succeed');
        } else {
            console.log('No data written');
        }
        return json;
    }).catch((err) => {
        throw err;
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
