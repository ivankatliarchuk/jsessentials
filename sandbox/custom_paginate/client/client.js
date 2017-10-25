'use strict';

const request = require('request');
const Promise = require('bluebird');
const _ = require('lodash');

// can we use event emmitter and rxjs
let clientCall = (page) => {
    let result = [];
    return new Promise((resolve, reject) => {
        toCall('/page/');
        function toCall(page) {
            let URL = `http://localhost:3000${page}`;
            request({
                url: URL,
                json: true
            }, (error, response, body) => {
                if (error) {
                    return reject('Unable to connect to service');
                } else if (response.statusCode === 200) {
                    let { done } = body;
                    let { nextPage } = body;
                    let { records } = body;
                    console.log('Url %s. Response length %s', URL, records.length);
                    if (typeof done === 'boolean' && !done) {
                        if (result.length > 0) {
                            result = result.concat(records);
                        } else {
                            result = records;
                        }
                        toCall(nextPage);
                    } else {
                        result = result.concat(records);
                        return resolve(result);
                    }
                } else {
                    return reject('Unable to fetch data');
                }
            });
        }
    });
};

module.exports = {
    clientCall: clientCall
};
