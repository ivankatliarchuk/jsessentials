'use strict';
let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Argument must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(3, 6).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 11);
}).then((res) => {
    console.log('Next Result: ', res);
}).catch((err) => {
    console.log('Cannot add non number');
});

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