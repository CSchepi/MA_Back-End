var express = require('express');
var router = express.Router();

const User =  require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    User.find({'name':req.query.name})
    .then((result)=>{
      if(result.length>0){
        res.send("exist");
      }
      else{
        res.send("free");
      }
    })
    .catch((err)=>{
      console.log(err);
    })
});

module.exports = router;
