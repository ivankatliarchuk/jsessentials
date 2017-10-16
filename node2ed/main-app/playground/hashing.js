const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

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
