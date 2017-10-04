let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            fistname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
}).listen(3000, '127.0.0.1');