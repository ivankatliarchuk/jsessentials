'use strict';

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

const request = require('request');

geocode.geocodeAddress(argv.address)
    .then((data) => {
        console.log(`Address: ${data.address}`);
        return weather.weatherForecast(data.latitude, data.longitude);
    }).then((data) => {
        console.log(`Current temperature in area ${data}`)
    }).catch((err) => {
        console.log(err);
    });
