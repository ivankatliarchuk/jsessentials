'use strict';

class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

let john = new Person('John', 'Doe');
console.log(john.__proto__);