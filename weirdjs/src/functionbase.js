'use strict';

function greet() {
    return 'Hi';
}

var anonymousGreet = function() {
    return 'anonymouse';
}

function nested(a) {
    a();
}

module.exports = {greet, anonymousGreet, nested};