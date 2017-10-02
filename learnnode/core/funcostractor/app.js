'use strict';

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

var john = new Person('John', 'Doe');
console.log(john);
john.greet();
