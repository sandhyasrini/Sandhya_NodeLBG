const product = require("express")();

product.get('/product/:number1/:number2', (req, res) => {

    //Checking if the value passed in params string is a number
    if (!isNaN(req.params.number1) && !isNaN(req.params.number2)) {
        let result = req.params.number1 * req.params.number2;
        res.send("The product of " + req.params.number1 + " * " + req.params.number2 + " is " + result)
    } else {
        res.status(400).send("Not a number")
    }

});
module.exports = product;