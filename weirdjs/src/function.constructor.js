'use sctrict';

function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname || 'John';
    this.lastname = lastname || 'Doe';
}

let john = new Person('John', 'Doe');
console.log(john);
console.log(john.__proto__);
// function cosnstructor and prototype

Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

console.log(john.getFullName());
Person.prototype.getFormalFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

console.log(john.getFormalFullName());
