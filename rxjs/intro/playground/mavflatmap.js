const Rx = require('rxjs/Rx')

let source = Rx.Observable
    .interval(100)
    .take(10)
    .map(x => Rx.Observable.timer(500).map(() => x))
    .mergeAll();

source.subscribe(x => console.log(x.toString()));