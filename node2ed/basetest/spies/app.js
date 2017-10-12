let db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if email already exists
    // save the user to the database
    db.saveUser({
        email,
        password: password
    });
    // send the welcome email
};