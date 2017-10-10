let config = require('./config');

module.exports = {
    getApiKey: function () {
        return `${config.apikey}`;
    }
}