console.clear();
const { Observable } = require('rxjs');

let source = ['1', '1', '2', 'foo', '3', '5', 'bar', '8', '13'];

let result = source
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((x, y) => x + y);

console.log(result);

let sourceStream = Observable.interval(400).take(9)
    .map(i => source[i]);

sourceStream.subscribe(x => console.log(x));

// or
result = sourceStream
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((x, y) => x + y);
result.subscribe(x => console.log(x));