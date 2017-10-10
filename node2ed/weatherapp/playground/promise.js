'use strict';

let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Unable to fulfill promise!');
    }, 2500);
    //resolve('Hey! It worked!');
});

somePromise.then(
    (data) => {
        console.log('Success:', data);
    }
).catch((err) => {
    console.log('Error: ', err);
});