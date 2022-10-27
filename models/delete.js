var pg_conn = require('./pg_config');
async function delFunc(product_id){
    const del_query =
    {
        text: 'DELETE FROM product WHERE id=$1',
       values: [product_id]
    }
    var query_data = await pg_conn.query(del_query);
    return;
}
module.exports = delFunc;