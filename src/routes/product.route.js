const product = require("express")();

product.get('/product', (req, res) => {

    //Checking if the value passed in query string is a number
    if (!isNaN(req.query.number1) && !isNaN(req.query.number2)) {
        let result = req.query.number1 * req.query.number2;
        res.send("The product of " + req.query.number1 + " * " + req.query.number2 + " is " + result)
    } else {
        res.status(400).send("Not a number")
    }

});
module.exports = product;