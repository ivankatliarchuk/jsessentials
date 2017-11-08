'use strict';
var moment = require('moment');
// Jan 1st 1970 00:00:00 am

new Date().getTime()
var someTimeStamp = moment.valueOf();
console.log(someTimeStamp);

var createdAt = 12340;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

