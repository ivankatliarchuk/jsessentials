const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


var showExplorer = true;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, showExplorer));

app.use('/', (req, res) => {
    res.send('Hello World')
});

app.listen(3000);