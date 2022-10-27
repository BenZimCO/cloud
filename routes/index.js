var express = require('express');
var router = express.Router();
var authen = require('../models/authenticator');
var display_box = require('../models/shopSelect');
var display_table = require('../models/product_display');
var session;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATN-SHOP' });
});

router.post('/', function(req, res, next) {
  res.render('login', { title: 'LOGIN PAGE',
                        message: "ATN SHOP" ,
                        notice:"please input user name and passwd"});
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});
router.post('/login', async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  session = req.session;
  let [authenticated,shop_id, role] = await authen(username,password);
  if (authenticated == true && role == "shop"){
    session.user_id = username;
    session.shop_id = shop_id;
    res.redirect('/users') 
  }
  else if(authenticated == true && role == "director"){
    session.user_id = username;
    res.redirect('/admin')
  }
  else{
  res.render('login', { title: 'LOGIN PAGE',
                        name: req.body.username,
                        notice:"wrong input user name and passwd" });
}
});

router.post('/select_shop', async function(req, res, next) {
  let shop_id = req.body.shop;
  var select_box_string = await display_box();
  let table_string = await display_table(shop_id);
  res.render('admin', { title: 'Admin PAGE',
                        message: "director" ,
                        select_shop: select_box_string,
                        table_string: table_string});
});
module.exports = router;
