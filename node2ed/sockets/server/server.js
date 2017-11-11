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
    io = socketIO(server),
    { isRealStreang } = require('./utils/validation'),
    { generateMessage, generateLocationMessage } = require('./utils/message'),
    { Users } = require('./utils/users'),
    users = new Users();


app.use(express.static(publicPath));
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

io.on('connection', (socket) => {
    console.log('new user connected');
  //  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));    
   // socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    
    socket.on('join', (params, callback) => {
        if (!isRealStreang(params.name) || !isRealStreang(params.room)) {
            return callback('Name and room name are required');
        }

        socket.join(params.room);
        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, params.room);
        // socket.leave(params.room);

        // io.emit -> io.to('The office Fans').emit
        // socket.broadcast.emit -> socket.broadcast.to('The Office Fans').emit
        // socket.emit
        io.to(params.room).emit('updateUserList', users.getUserList(params.room));
        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} joined`));

        callback();
    });

    socket.on('createMessage', (message, callback) => {
        let user = users.getUser(socket.id);

        if (user && isRealStreang(message.text)) {
            io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
        }        
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        let user = users.getUser(socket.id);

        if (user) {
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
        }        
    });

    socket.on('disconnect', () => {
        let user = users.removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('updateUserList', users.getUserList(user.room));
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left`));
        }
    });
});

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
