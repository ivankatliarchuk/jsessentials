'use strict';

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (let i = 0; i< arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);

function mapForEach(arr, fn) {
    var newArr = [];
    for (let i = 0; i< arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

console.log(mapForEach(arr1, (x) => {return x * 2.8}));

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// only pass a limiter
var checkPastLimitSimplified = function(limiter) {
    return function(limit, item) {
        return item > limit;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);









