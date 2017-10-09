'use strict';

const request = require('request');
const yargs = require('yargs');

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
// node app.js -a '1301 lombard street'
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
    json: true
}, (error, response, body) => {
    if (error) throw error;
    //console.log(response);
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longiture: ${body.results[0].geometry.location.lng}`)
});