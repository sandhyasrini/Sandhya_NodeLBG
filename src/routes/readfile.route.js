const readFile = require("express")();
var path = require('path');

readFile.get('/sendFile', (req, res) => {
        res.sendFile(path.resolve('src/files/sample.txt') , (err) => {
            if (err) {
                console.error('error occured', err);
                res.status(500).send(err.code)
              }
        });
});

module.exports = readFile;