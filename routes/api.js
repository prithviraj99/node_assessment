var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/product/:number1/:number2', function(req, res, next) {
  console.log(req.params);
  let number1 = req.params.number1;
  let number2 = req.params.number2;
  if(isNaN(number1) || isNaN(number2)){
    res.status(400).json({
      errorMsg: "Bad Request- Inalid request parameters"
    })
  }
  else {
    res.status(200).json({ 
      productValue: number1* number2
    });
  }
});

router.post('/search', function(req, res, next) {
   console.log(req.body);
   let searchString = String(req.body.inputStr);
   let countObj = {};
   let firstNonRecurringChar;
   for (var i = 0; i < searchString.length; i++) {
     var c = searchString.charAt(i);
     if (searchString.indexOf(c) == i && searchString.indexOf(c, i + 1) == -1) {
       firstNonRecurringChar = c;
       res.status(200).json({
          outputChar : c
       })
     }
   }
   if(!firstNonRecurringChar) {
     res.status(404).json({
       outputChar : null
     })
   }
})

module.exports = router;
