console.log('Starting notes.js');

let addNote = (title, body) => {
    console.log('Adding note', title, body);
    return 'New note';
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
