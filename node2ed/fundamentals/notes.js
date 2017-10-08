console.log('Starting notes.js');

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

let addNote = (title, body) => {
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
    ).then((data) => {
            return new Promise((resolve, reject) => {
                fs.writeFileAsync(__dirname + '/notes.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
                    if (err) reject(err);
                    else resolve(JSON.stringify(data, null, 4));
                });
            });
    }).then((json) => {
            if (json) {
                console.log('Succeed');
            } else {
                console.log('No data written');
            }
        }
    ).catch((err) => {
            console.log('Error', err.message);
        }
    );
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
