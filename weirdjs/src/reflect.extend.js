'use strict';

let person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}

john.__proto__ = person;

for (let prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ':' + john[prop]);
    }
}

let jane = {
    address: '111 Main St.',
    getFormatFullName: () => {
        return this.lastName + ', ' + this.firstName;
    }
}

let jim = {
    getFirstName: () => {
        return firstName;
    }
}

