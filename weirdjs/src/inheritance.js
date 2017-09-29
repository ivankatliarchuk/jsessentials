'use strict';

var person = {
    firstName: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastname; 
    }
}

var john = {
    firstName: 'John',
    lastname: 'Doe'
}


// dont do this. demo purpose only
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName)

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = person;
console.log(jane.lastname);

// ---/---
var a = {}
var b = function() {}
var c = [];

console.log(a.__proto__);
console.log(b.__proto__);




