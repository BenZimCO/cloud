var pg_conn = require("./pg_config"); 
 
async function display_box()
{
  var shop_query = `SELECT shop.name, shop.id FROM shop JOIN users on \
                    users.shop_id = shop.id WHERE users.role ='shop'`;
  var data = await pg_conn.query(shop_query);
  let num_shop = data.rowCount;
  let select_box_string = `
  <form action="select_shop" >
    <label for="shop">Choose a shop:</label>
       <select name="shop" id ="shop">
       <option value =0 selected>All shop</option>
       `;
  for (let i=0;i<num_shop;i++)
  {
    let shop_name = data.rows[i].name
    let shop_id = data.rows[i].id
    select_box_string += `<option value=${shop_id}>${shop_name}</option>
    `;
  }
  
  return select_box_string;
};

module.exports = display_box;