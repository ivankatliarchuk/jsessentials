const Rx = require('rxjs/Rx')

let source = Rx.Observable.from([0, 1, 3, 4, 5]);

let result = source.reduce((r, x) => {
    return r + x; 
}, 0).subscribe((result) => {
    console.log(result);
});



