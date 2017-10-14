const { Observable } = require('rxjs/Observable');

let obs = Observable.create((observer) => {
    let counter = 0;
    const min = 1;
    const max = 87;
    while (counter < 4) {
        setTimeout(() => {
            observer.next(Math.random() * (max - min) + min);
        }, 15000);
        counter++;
    }
});

obs.subscribe(x => console.log(x));