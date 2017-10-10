'use strict';

const request = require('request');
const Promise = require('bluebird');
// node app.js -a '1301 lombard street'
module.exports.geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google service');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else {               
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};
