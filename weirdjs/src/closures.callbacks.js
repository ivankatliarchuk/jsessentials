'use strict';

function sayHiLater() {
    var greeting = 'Hi!';
    setTimeout(function() {
        console.log(greeting);
    }, 1000);
}

sayHiLater();

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work

    callback();
}

tellMeWhenDone(function() {
    console.log('I\'m done');
})
