var pg_conn = require("./pg_config");
async function authen(user,pass) {
  var shop_id;
  var role ="";
  var authenticated = false;
  const acc_query =
  {
       text: 'SELECT * FROM users WHERE name=$1 AND passwd=$2',
       values: [user,pass]
  }; 
 var query_data = await pg_conn.query(acc_query);
 if (query_data.rowCount == 1)
   {
    authenticated = true;
    shop_id = query_data.rows[0].shop_id;
    role = query_data.rows[0].role;
   }
 console.log(authenticated);
 return [authenticated, shop_id, role];
}

module.exports = authen;