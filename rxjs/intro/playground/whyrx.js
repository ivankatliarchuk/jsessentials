
const { Observable } = require('rxjs');

// it allows to specify the dynamic behavior of a value completely
// at the time of declaration

// let a = 3;
// let b = 10 * a;

// console.log(b);

// a = 4;
// console.log(b);

let streamA = Observable.of(3);
let streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));