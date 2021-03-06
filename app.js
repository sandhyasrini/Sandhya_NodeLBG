const app = require("express")();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;
var sm = require('sitemap')
    , fs = require('fs');
var getImageUrls = require('get-image-urls');

const sendFile = require("./src/routes/readfile.route.js"),
    product = require("./src/routes/product.route.js"),
    uploadFile = require("./src/routes/uploadFile.route.js"),
    nonRepeatingChar = require("./src/routes/nonRepeatingChar.route.js"),
    webCrawler = require("./src/routes/webCrawler.route.js")

app.use('/', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
}, sendFile, product, uploadFile, nonRepeatingChar, webCrawler);


app.listen(PORT, () => {
    console.log('App listening on port ', PORT);
});

module.exports = app; // for testing
