const { Observable } = require('rxjs/Observable');

let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(42);
    }, 500);
    console.log('promise started');
});

promise.then(x => console.log(x));

let obs = Observable.create((observer) => {
    setTimeout(() => {
        observer.next(42);
    }, 500);
    console.log('promise started');
    setTimeout(() => {
        observer.next(43);
        observer.next(48);
    }, 300);
});

obs.subscribe(x => console.log(x));