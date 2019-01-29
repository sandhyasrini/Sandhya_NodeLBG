const nonRepeatingChar = require("express")();

nonRepeatingChar.get('/nonRepeatingChar/:string',function(req,res)
{
   
   let string = req.params.string;
   res.send(firstNonRepeatedCharacter(string));
   
    function firstNonRepeatedCharacter(string) {
        for (var i = 0; i < string.length; i++) {
          var c = string.charAt(i);
          if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
          }
        }
        return null;
      }
})

module.exports = nonRepeatingChar;