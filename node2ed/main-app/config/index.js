let config = require('./config.json');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${config.host}:${config.port}/${config.dbname}`;
    }
}