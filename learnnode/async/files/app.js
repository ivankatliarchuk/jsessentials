let fs = require('fs');

let greet = fs.readFileSync(__dirname + '/greet', 'utf8');

console.log(greet);

let greet2 = fs.readFile(__dirname + '/greet', 'utf8', function (err, data) {
    if (err) {

    }
    console.log(data);
});

console.log('Done');
