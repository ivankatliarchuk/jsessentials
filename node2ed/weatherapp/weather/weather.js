'use strict';

const request = require('request');
const Promise = require('bluebird');

const config = require('../config');

module.exports.weatherForecast = (lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/${config.getApiKey()}/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to forecast service');
            } else if (response.statusCode === 200) {
                resolve(body.currently.temperature);
            } else {
                reject('Unable to fetch weather');
            }
        });
    });
};