function greet(callback) {
    console.log('Hello!');
    let data = {
        name: 'John Doe'
    }
    callback(data);
};

greet(function(data) {
    console.log('The callback was invoked!');
    console.log(data);
})