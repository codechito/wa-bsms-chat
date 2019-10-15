var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/chat', function(req, res, next) {
  res.render('chat');
});

module.exports = router;
