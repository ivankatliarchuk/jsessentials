'use strict';

const { Server } = require('http');
const server = new Server();


server.on('request', (req, res) => {
    res.end('hello');
});

class EventEmitter {
    constructor() {
        this._handlers = {};
    }
    on(eventName, handler) {
        this._handlers[eventName] = handler;
    }

}

server.listen(8000);

//end on minute 01 >> 32
