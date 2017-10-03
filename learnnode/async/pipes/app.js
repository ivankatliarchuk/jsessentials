let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet');
let writable = fs.createWriteStream(__dirname + '/greetcopy');
let compressed = fs.createWriteStream(__dirname + '/greet.gz');
let gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);

