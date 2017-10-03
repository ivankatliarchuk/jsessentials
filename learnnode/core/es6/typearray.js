'use strict';

let buffer= new ArrayBuffer(8);
let view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view);