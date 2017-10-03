'use strict';

//import * as Greetr from './greetr';
let Greetr = require('./greetr');

let greetr1 = new Greetr();
greetr1.on('greet', function (data) {
    console.log('Someone greeted! ' + data);
});

greetr1.greet('my data');
