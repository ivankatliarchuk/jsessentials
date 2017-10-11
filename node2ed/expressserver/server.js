const
    express = require('express'),
    hbs = require('hbs'),
    fs = require('fs');

let app = express();

// configure middleware
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    let now = new Date().toUTCString();
    let log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile(__dirname + '/server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintanance.hbs');
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (reg, res) => {
    res.render('index.hbs', {
        pageTitle: 'Home PAGE'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.json({
        error: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});