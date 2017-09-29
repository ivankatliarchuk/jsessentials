'use strict';

let people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        address: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        address: [
            '333 Main St.'
        ],
        greet: function() {
            return 'Hello';
        }
    }
]

console.log(JSON.stringify(people));
// TYPE of and INSTANCE of
var a = 3;
console.log(typeof a);

function Person(name) {
    this.name = name;
}
let e = new Person('Jane');

console.log(typeof e);
console.log(e instanceof Person);