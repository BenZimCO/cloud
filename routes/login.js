var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('login', { title: 'LOGIN PAGE',
                        message: "ATN SHOP" });
});

module.exports = router;