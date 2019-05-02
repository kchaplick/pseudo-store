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
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  //list all items and their information
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    //for loop
    for (var i = 0; i < res.length; i++) {
      console.log(
        `Item ID: ${res[i].item_id} || Name: ${res[i].product_name} || Department: ${res[i].dept_name} || Price: ${res[i].price} || Stock: ${res[i].stock_quantity}`
      )
    }
    selectItem();
  })

}


function selectItem() {

  //list all items and their information
  connection.query("SELECT product_name FROM products ", function (err, res) {
    if (err) throw err;
    inquirer
      .prompt({
        name: "selectItem",
        type: "list",
        message: "What would you like to purchase",
        choices: function () {
          //create an array to hold product names
          var productsToChoose = [];
          for (var i = 0; i < res.length; i++) {
            productsToChoose.push(res[i].product_name);
          }
          return productsToChoose;
        }
      })
      .then(function (answer) {
        selectQuantity(answer.selectItem);
      });
  });
}

function selectQuantity(product) {
  inquirer
    .prompt({
      name: "selectQuantity",
      type: "number",
      message: "How many would you like to purchase",
    })
    .then(function (answer) {

      connection.query("SELECT product_name, stock_quantity, price FROM products WHERE ?",
        [
          {
            product_name: product
          }
        ],
        function (err, res) {
          if (err) throw err;
          if (res[0].stock_quantity < answer.selectQuantity) {
            console.log("Sorry there is not enough stock")
            selectQuantity(product);
          } else {
            var total = parseInt(res[0].price) * parseInt(answer.selectQuantity)
            console.log(`Your total is $${total}`)
            updateStock(product, answer, res[0].stock_quantity)
          }
        });
    })
};

function updateStock(product, answer, currentStock) {
  var newStock = currentStock - answer.selectQuantity
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newStock
      },
      {
        product_name: product
      }
    ],

    function (err) {
      if (err) throw err;
      inquirer
        .prompt({
          name: "orderAgain",
          type: "confirm",
          message: "Would you like to make another purchase",
        })
        .then(function (answer) {
          if (answer.orderAgain === true) {
            start();
          } else {
            console.log("Thanks for shopping");
            connection.end();
          }

        })
    }
  )
};

