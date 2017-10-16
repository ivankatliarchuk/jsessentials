const request = require('request');
const Promise = require('bluebird');
const _ = require('lodash');

let clientCall = (event, url) => {
    let result = [];
    return new Promise((resolve, reject) => {
        makeCall('/page/');
        function makeCall(page) {
            console.log('Call Function', page, '\n');
            request({
                url: `http://localhost:3000${page}`,
                json: true
            }, (error, response, body) => {
                if (error) {
                    console.log('EXCEPTION SEND 1');
                    reject('Unable to connect to service');
                } else if (response.statusCode === 200) {
                    console.log(body.records.length);
                    let { done } = body;
                    let { nextPage } = body;
                    let { records } = body;
                    if (typeof done === 'boolean' && !done) {                                            
                        console.log('Call.', `http://localhost:3000${page}`);
                       // observer.next(records);
                        event.emit('records', records);
                        makeCall(nextPage);
                    } else {
                        console.log('Last call.', `http://localhost:3000${page}`);
                        //observer.next(records)
                        event.emit('records', records);
                        return resolve(-1);
                    }
                } else {
                    reject('Unable to fetch data', error);
                }
            });
        }
    });
};

module.exports = {
    clientCall: clientCall
}

// clientCall().then((data) => {
//     console.log('Received:', data.length);
//     console.log(JSON.stringify(data, undefined, 2));
// }).catch(err => console.log(err.message));