let EventEmitter = require('events');
let util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

let greetr1 = new Greetr();
greetr1.on('greet', function(data) {
    console.log('Someone greeted! ' + data);
});

greetr1.greet('my data');
