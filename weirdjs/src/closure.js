'use strict';

function greet(whatosay) {
    return function(name) {
        return `${whatosay} ${name}`
    }
}

var sayHi = greet('Hi');

function buildFunctions() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                // uncomment to se output
                return function() {
                  //  console.log(j);
                }
            }(i))
        );
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

module.exports = {greet, sayHi};
