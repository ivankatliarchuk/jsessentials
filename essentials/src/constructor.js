"use strict"

function Apple(x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
};
 
Apple.prototype = {
    eat: function() {
        return 'Eat that APPLE'
    },
    throw() {
        throw 'Too Big'
    }
};
Apple.prototype.extra = function() {
    return 'Extra Taste';
}

var apple = new Apple(10, 20, "red", 200);
var option = {x: 10, y: 20, color: 'green', score: 150}
// console.log(option);

module.exports = {apple};

// console.log(apple.eat())

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
 }