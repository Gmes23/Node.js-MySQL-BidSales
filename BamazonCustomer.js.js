var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "nothing", //Your password
    database: "Bamazon"
})



function storeOpen(){
  connection.query('SELECT * FROM Products', function(err, res){
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
          console.log(res[i].ItemID + " | " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity + "|" );
      }

    inquirer.prompt({
      name: "Item",
      type: "input",
      message: "Order and item by ID",
      validate: function(value){
      if (((parseInt(value)) > 0) <= res.length){
          return true;
        } else {
          return "that item is not in stock, but lets order it";
        }
      },{
        name "Quantity",
        type: "input".
        message: "how much of that item would you like?"
        validate: function(value){
          if (parseInt(value) > StockQuantity){
            console.log("Insufficient quantity!");
          } else {
            return true;
          }
        }
      }
    }).then(function(answers){
          connection.query("INSERT INTO Products SET ?", {
          ProductName: answer.ProductName,
          DepartmentName: answer.DepartmentName,
          StockQuantity: answer.StockQuantity
        }, function(err, res){
          console.log("Your order was made!");
          storeOpen();
        });
  })
}


storeOpen();
