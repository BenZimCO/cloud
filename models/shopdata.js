var pg_conn = require("./pg_config"); 
 
async function display_table(shop_id)
{
  var product_query = 
  {
     text: 'SELECT * FROM product WHERE shop_id = $1',
       values: [shop_id]
  };
  var data = await pg_conn.query(product_query);
  var table_string = `
     <h2> product for shop</h2>
       <table border="1">
       <tr>`;
  let num_fiels = data.fields.length;
  let num_rows = data.rowCount;
  const list_fields = [];
  for (let i=0;i<num_fiels;i++)
  {
    let fields_name = data.fields[i].name;
    list_fields.push(fields_name);
    table_string += `<th>${fields_name}</th>`;
  }
  table_string += `</tr>`;
  for (let i=0; i < num_rows;i++)
  {
    table_string += `<tr>`;
    for(let j=0;j<num_fiels;j++){
        let cell = data.rows[i][list_fields[j]];
        table_string += `<td>${cell}</td>`;
    }
    table_string += `</table>`;
    return table_string;
  }
};

module.exports = display_table;