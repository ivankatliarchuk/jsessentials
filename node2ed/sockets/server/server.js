'use strict';

const
    path = require('path'),
    express = require('express'),
    http = require('http'),
    socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const
    app = express(),
    port = process.env.PORT || 3000,
    server = http.createServer(app),
    io = socketIO(server);

app.use(express.static(publicPath));
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newEmail', {
        from: 'mike',
        text: 'Hey. What is going on.',
        createdAd: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.emit('newMessage', {
        text: 'Hey. How are you!',
        timeStamp: new Date()
    });

    // socket.on('disconnect', () => {
    //     console.log('User was disconnected');
    // });
});




server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
