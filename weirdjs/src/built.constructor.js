'use strict';

let a = new Number(3);
console.log(a);

Number.prototype.data = function (number) {
    return this * number;
}

console.log(a.data(3));

String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}

console.log('interesting'.isLengthGreaterThan(5));

let person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
        return 'Hi ' + this.firstname;
    }
}

console.log(person.greet());

let john = Object.create(person);
console.log(john.__proto__);
console.log(john.greet());

// POLYFILLs
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        function F() { }
        F.prototype = o;
        return new F();
    };
}


