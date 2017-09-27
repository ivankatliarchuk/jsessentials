'use strict';

function greet(whatosay) {
    return function(name) {
        return `${whatosay} ${name}`
    }
}

var sayHi = greet('Hi');

module.exports = {greet, sayHi};