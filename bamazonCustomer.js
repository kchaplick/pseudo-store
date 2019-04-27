//all required files
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // username
  user: "root",

  // Your password
  password: "crystal92",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start(){
//list all items and their information
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  
  //for loop
  for (var i = 0; i < res.length; i++){
    console.log(
      `Item ID: ${res[i].item_id} || Name: ${res[i].product_name} || Department: ${res[i].dept_name} || Price: ${res[i].price} || Stock: ${res[i].stock_quantity}`
    )
  } 


  })
}



//prompt user with 2 questions
// ID of the product they would like to buy.

// Ask how many units of the product they would like to buy.

//check if there is sufficient amount

//if not log insufficient message

//if enough log price of total sale and update inventory