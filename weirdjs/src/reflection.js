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

john.__proto__ = person;

// example of reflrection

for (let prop in john) {
    console.log(john[prop]);
}