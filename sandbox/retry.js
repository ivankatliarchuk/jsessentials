
let x = 0;

let call = (callback) => {
    setTimeout(() => {
        x++;
        callback(x);
    }, 100);
};

let flag = true;
while (flag) {
    console.log('Loop');
    call((result) => {
        if (result === 2) {
            flag = false
        }
    })
}
