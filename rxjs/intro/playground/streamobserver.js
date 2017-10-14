const Rx = require('rxjs/Rx')

let source = Rx.Observable.interval(100)
    .map(() => '.');