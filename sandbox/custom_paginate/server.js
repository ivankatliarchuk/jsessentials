const
    express = require('express');
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

const app = express();

app.get('/page/:paginate?', (req, res) => {
    let { paginate } = req.params;
    console.log(`Request received: /page/${paginate}`);
    // TODO change this. First call make a query call
    if (paginate === 'undefined' || paginate === null || paginate === undefined) {
        fetch('first.json')
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log("Error when fetch data:", error.message);
                res.status(400).json({ error: 'Data not found' });
            })
    } else if (paginate) {
        fetch(`${paginate}.json`)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log("Error when fetch data:", error.message);
                res.status(400).json({ error: 'Data not found' });
            })
    } else {
        return res.status(200).json({ message: 'Not found' });
    }
});

let fetch = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFileAsync(`${__dirname}/fixtures/${file}`, 'utf8').then((data) => {
            data ? resolve(JSON.parse(data)) : [];
        },
            (err) => { console.log('Error'); }
        )
    })
};

app.listen(3000, () => {
    console.log('Started on port 3000');
});

