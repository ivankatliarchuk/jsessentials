const { Observable } = require('rxjs/Observable');
const Rx = require('rxjs/Rx')
let source = Rx.Observable.from([0, 1, 2, 3, 4, 5]);
console.log(source);

source.filter((x) => {
        return x % 2 === 0;
    })
    .map((x) => {
        return x + '!';
    })
    .reduce((r, x) => {
        return r + x;
    }, '')
    .subscribe(x => console.log(x));


