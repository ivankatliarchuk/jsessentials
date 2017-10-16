'use strict';

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

const { clientCall } = require('./client');
const SchemaVersion = process.env.SCHEMA_VERSION || 1;

// move to utils
// create verstion to write to S3 depends on ENV
let saveRecords = (file) => {
    return (data) => {
        return new Promise((resolve, reject) => {
            fs.writeFileAsync(`${__dirname}/${file}`, JSON.stringify(data, undefined, 2), 'utf8', (err) => {
                if (err) reject(err);
                else resolve(data);
            });
        })
    };
};

let enrich = (records) => {
    return new Promise((resolve, reject) => {
        let obj = {
            schemaVersion: SchemaVersion,
            metaData: {
                timestamp: new Date().toUTCString(),
                records: records.length
            },
            data: records
        }
        resolve(obj);
    });
};

clientCall('')
    .then(enrich)
    .then(saveRecords('results'))
    .then((data) => console.log('Completed:', data.length))
    .catch((err) => {
        console.log('Error:', err);
    });


