var express = require('express');
var router = express.Router();

const User =  require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    let new_tutprogress = req.query.new_tutprogress;
    User.findOneAndUpdate({_id: req.query.id}, {tutprogress: new_tutprogress}, {new: true})
    .then((result)=>{
      res.send(result);
    })
    .catch((err)=>{
      console.log(err);
    })
});

module.exports = router;
