const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let message = 'I am user number 3';
let hash = SHA256(message).toString();
console.log(hash);

let data = {
    id: 4
};

let token = {
    data: data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

token.data.id = 5;
console.log(token);
let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
    console.log('Data was not changed!');
} else {
    console.log('Data was changed! Do not trust!');
}

data = {
    id: 10
};
// jwt
let jwttoken = jwt.sign(data, '123abc');
console.log(jwttoken);
let decoded = jwt.verify(jwttoken, '123abc');
console.log(decoded);

let password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    console.log('salt:', salt);
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash:',hash);
    });
});

let hashedPassword = '$2a$10$fvSr0FFYW2GzYORVDYr72OUHwnc4XH/tKWqFx08ChpCtvlSfvt5GW';

bcrypt.compare(password, hashedPassword, (err, result) => {
    
});
