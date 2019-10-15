var express = require('express');
var router = express.Router();

router.all('/login', function(req, res, next) {
  if(req.session.burstadmin){
    res.redirect('/web/chat');
  }
  else{
    if(req.body.username == "keep" && req.body.password == "off"){
      req.session.burstadmin = true;
      res.redirect('/web/chat');
    }
    else{
      res.render('login');
    }
  }
});
router.get('/chat', function(req, res, next) {
  if(req.session.burstadmin){
    res.render('chat');
  }
  else{
    res.redirect('/web/login');
  }
});

module.exports = router;
