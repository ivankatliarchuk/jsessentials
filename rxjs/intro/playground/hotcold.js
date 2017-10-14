const Rx = require('rxjs/Rx')

let clock = Rx.Observable.interval(1000).take(10).map(x => x + 1);
clock.subscribe(i => console.log('a: ', i));

setTimeout(() => {
    clock.subscribe(i => console.log('   b:', i));
}, 2000);