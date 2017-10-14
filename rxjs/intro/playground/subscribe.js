const Rx = require('rxjs/Rx')

var observable = Rx.Observable.create(function subscribe(observer) {
    var id = setInterval(() => {
        observer.next('hi')
    }, 1000);
})

observable.subscribe(x => console.log(x));