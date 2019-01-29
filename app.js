const app = require("express")();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

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