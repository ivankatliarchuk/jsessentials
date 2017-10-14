const Rx = require('rxjs/Rx');
const { EventEmitter } = require('events');
const event = new EventEmitter();

let source = Rx.Observable.fromEvent(event, 'data');

source.subscribe((data) => {
    console.log('received:', data);
});

let count = 0;
while (count < 4) {
    setTimeout(() => {
        count++;
        event.emit('data', Math.random());
        console.log('send event');
    }, 2000)
}



