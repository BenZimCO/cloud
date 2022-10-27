var express = require('express');
const session = require('express-session');
var router = express.Router();
var display_table = require('../models/product_display');
var display_box = require('../models/shopSelect');
/* GET home page. */
router.get('/', async function(req, res, next) {
  let session = req.session;
  if(session.user_id){
    let shop_id = req.body.shop;
    var select_box_string = await display_box();
    let table_string = await display_table(shop_id)
    res.render('admin',{ title:'Admin PAGE',
                        name: req.body.username,
                        select_shop: select_box_string,
                        table_string: table_string});
  }else{
    res.render('login', { title: 'LOGIN PAGE',
                        name: req.body.username,
                        notice:"Please login" });
  }

});

module.exports = router;