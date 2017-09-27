'use strict';


function greet(name) {
    console.log('Hello ' + name);
}

// using a functiin expression
var greetFunc = function(name) {    
    return `Hello ${name}`;
}('Pedro');

// standalone immediately invoked expression
(function(name) {
    // console.log(name);
    return `Hello ${name}`;
}('Function Expression'));

module.exports = {greetFunc};


