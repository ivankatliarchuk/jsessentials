var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy');

readable.on('data', (chunk) => {
    writable.write(chunk);
});
