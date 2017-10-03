// object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj['greet']);

let arr = [];
arr.push(function () {
    console.log('Hello world 1');
});
arr.push(function () {
    console.log('Hello world 2');
});
arr.forEach(function (item) {
    item();
});


