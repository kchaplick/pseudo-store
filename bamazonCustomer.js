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



}



//prompt user with 2 questions
// ID of the product they would like to buy.

// Ask how many units of the product they would like to buy.

//check if there is sufficient amount

//if not log insufficient message

//if enough log price of total sale and update inventory