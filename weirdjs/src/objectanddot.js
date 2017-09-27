'use strict';

var person = new Object();

person['firstname'] = 'Tony'
person['lastName'] = 'Alicea'

console.log(person.lastName);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = 'New Yourk';
person.address.state = 'NY';

var child = {
    firstname: 'Alice',
    address: {
        street: '1 Main St.',
        city: 'New Yourk',
        state: 'NY'
    }    
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}