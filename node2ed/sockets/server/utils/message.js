'use strict';
const moment = require('moment');

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    }
};

let generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `http://google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    }
};


module.exports = {
    generateMessage, generateLocationMessage
}