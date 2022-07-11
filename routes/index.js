var express = require('express');
var router = express.Router();
var register = require('../model/register');
var bcrypt = require('bcrypt');

/* GET home page. */
router.post('/getregister',async function(req, res, next) {

  

  try {
    
      var password = req.body.password;
      var confirm_password = req.body.confirm_password;
      var pass1 = await bcrypt.hash(password, 10);
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: pass1
      }
      
      if (password == confirm_password) {
        
        const registerdata = await register.create(data);
        res.status(201).json({

          data:registerdata
  
        })  
        
      } else {

        console.log('password is not valid');
        
      }
      
    } catch (error) {
      
      res.send(error.message);

    }

});


router.post('/getlogin',async function(req, res, next) {

    
  try {
    
    const password = req.body.password;
    const logindata = await register.findOne({ email: req.body.email });

    if (bcrypt.compareSync(password, logindata.password)) {
      
      res.status(201).json({

        data:logindata
  
      })  

    } else {
      
      console.log('password is not valid');

    }
    
  } catch (error) {
    
    res.send(error.message);

  }

});

module.exports = router;
