var Promise = require('bluebird');
let express = Promise.promisifyAll(require('express'));
let config = require('./config')
let mongoose = require('mongoose');
let app = express();
let setupController = require('./controllers/setupController');
let apicontroller = require('./controllers/apicontroller');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// db connectin
mongoose.Promise = require('bluebird');
mongoose.connect(config.getDbConnectionString(), {
    useMongoClient: true
}).then(
    () => { console.log('Connection Established') },
    err => { console.log(`Not able to connect ${err.code} ${err.message}`) }
    );
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// controllers

/**
 * Setup data with get request
 * curl -X GET http://localhost:3000/api/setupTodos
 */
setupController(app);

/**
 * Find by name
 * curl -X GET http://localhost:3000/api/todos/test
 * Find by id
 * curl -X GET http://localhost:3000/api/todo/59d7ea15e216c715d3a42efc
 * 
 * Create new object
 * curl -X POST http://localhost:3000/api/todo -H 'content-type: application/json'
  -d '{
    "todo": "Make pizza 5",
    "isDone": true,
    "hasAttachment": false
     }'
 * Update current object
 * Same as create, only need to be added id.
 * Delete object
 * curl -X DELETE http://localhost:3000/api/todo/59d7f281044a8a25a6ece493 
 */
apicontroller(app);

app.listen(port);