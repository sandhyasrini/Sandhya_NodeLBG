const fileUpload = require('express-fileupload');
var path = require('path');
const uploadFile = require('express')();
uploadFile.set('views', path.resolve('views'));
uploadFile.set('view engine', 'ejs');

// Get method which displays a ejs template to upload files
uploadFile.get('/uploadFile', function (req, res) {
    res.render('uploadfile');
})

//express-fileupload used as middleware
uploadFile.use(fileUpload());

//received file is stored in src/files directory
uploadFile.post('/uploadFile', function (req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let sampleFile = req.files.sampleFile;
    let name = req.files.sampleFile.name;
    sampleFile.mv(__dirname + '/../files/' + name , function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
    });
});

module.exports = uploadFile;