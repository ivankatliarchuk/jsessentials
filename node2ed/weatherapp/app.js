'use strict';

const yargs = require('yargs');

const config = require('./config');
const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address).then(
    (data) => {
        console.log(`Address: ${data.address}`);
        console.log(`Latitude: ${data.latitude}`);
        console.log(`Longiture: ${data.longitude}`);
    }
).catch((err) => {
    console.log(err);
});    
