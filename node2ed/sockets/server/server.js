'use strict';

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
