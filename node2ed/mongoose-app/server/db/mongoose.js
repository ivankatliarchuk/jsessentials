const mongoose = require('mongoose');
const config = require('../../config');

mongoose.Promise = require('bluebird');
mongoose.connect(config.getDbConnectionString(),
    {
        useMongoClient: true
    }).then(() => {
        console.log('Connection Established')
    }).catch((err) => {
        console.log(`Not able to connect ${err.code} ${err.message}`)
    });

module.exports = {
    mongoose: mongoose
}    