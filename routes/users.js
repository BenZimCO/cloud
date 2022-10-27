var express = require('express');
var router = express.Router();
var display_table = require('../models/product_display');
var delFunc = require('../models/delete');
/* GET users listing. */
router.post('/functions', async function(req, res, next) {
  let session = req.session;
  let product_id = req.body.id;
  console.log(product_id);
  delFunc(product_id);
  let username = session.user_id;
  let shop_id = session.shop_id;
  let table_string = await display_table(shop_id);
  res.render('user',{ title:'ALL product of the shop',
                        name: username,
                        table_string: table_string});
});
router.get('/', async function(req, res, next) {
  let session = req.session;
  if (session.user_id){
  let username = session.user_id;
  let shop_id = session.shop_id;
  let table_string = await display_table(shop_id);
  res.render('user',{ title:'ALL product of the shop',
                        name: username,
                        table_string: table_string});
  
}else{
  res.render('login',{ title:'Login page',
                       message: "ATN SHOP",
                       notice: "please login"});
}
});
module.exports = router;
