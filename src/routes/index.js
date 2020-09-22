var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  return res.status(200).json({message: 'Welcome to base route of PERN Starter Template'});
});

module.exports = router;
