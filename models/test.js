var pg_conn = require("./pg_config");
async function test_query() {
   const acc_query =
   {
       text: 'SELECT * FROM users WHERE shop_id = $1',
       values: [1]
   };
 query_data = await pg_conn.query(acc_query);
 console.log(query_data)
 return query_data
}

result = test_query();
console.log(result)