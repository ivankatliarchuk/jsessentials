let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    let config = require('./config.1.json');
    console.log(config);
    let envConfig = config[env];

    console.log(Object.keys(envConfig));

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}