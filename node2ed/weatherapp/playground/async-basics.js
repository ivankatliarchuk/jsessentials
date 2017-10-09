console.log('starting app');
setTimeout(() => {
    console.log('Inside of CALLBACK');
}, 1000);
setTimeout(() => {
    console.log('Second Timeout');
}, 1);
console.log('finishing app');