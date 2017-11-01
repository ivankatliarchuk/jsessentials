var socket = io();

socket.on('connect', function () {
    console.log('Connnected!!!');

    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Hey. This is Andrew'
    });

    
});

socket.on('disconnnect', function () {
    console.log('Disconnected from server!!!!');
});

socket.on('newEmail', function (email) {
    console.log('new email', email);
});

socket.on('newMessage', function (message) {
    console.log('new message', message);
});