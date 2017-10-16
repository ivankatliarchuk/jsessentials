let config = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${config.host}:${config.port}/${config.dbname}`;
    }
}