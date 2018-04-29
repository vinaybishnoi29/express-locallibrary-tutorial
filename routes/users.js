var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource-users');
});


router.get('/vinay', function(req, res, next) {
  res.send('respond with a resource-vinay');
});

module.exports = router;
