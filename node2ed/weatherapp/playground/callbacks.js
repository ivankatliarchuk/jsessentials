let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Vikam'
    };
    setTimeout(() => {
        callback(user);
    }, 2300);    
};

getUser(31, (user) => {
    console.log(user);
});