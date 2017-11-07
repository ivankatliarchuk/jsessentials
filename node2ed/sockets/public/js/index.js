var socket = io();

socket.on('connect', function () {
    console.log('Connnected!!!');
});

socket.on('disconnnect', function () {
    console.log('Disconnected from server!!!!');
});

socket.on('newEmail', function (email) {
    console.log('new email', email);
});

socket.on('newMessage', function (message) {
    console.log('new message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}:${message.text}`);
    jQuery('#messages').append(li);
});


jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {       
    });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported buy your browser.');
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        alert('Unable to fetch locationn');
    });
});