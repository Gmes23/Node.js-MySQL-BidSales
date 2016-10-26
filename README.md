# Node.js-MySQL-BidSales
Using my Node.js &amp; MySQL we will create an app that will take in orders from customers and deplete stock from the store's inventory

Challenge #1: Customer View

Created a MySQL Database called Bamazon.

Created a Table inside of that database called Products.

The products table should has the following columns:

ItemID (unique id for each product)

ProductName (Name of product)

DepartmentName

Price (cost to customer)

StockQuantity (how much of the product is available in stores)

Populated this database with around 10 different products. (i.e. "mock" data).

Then create a Node application called BamazonCustomer.js. Running this application will first display all of the items available for sale. Including the ids, names, and prices of products for sale.

The app then prompt users with two messages.

The first ask them the ID of the product they would like to buy.
The second message ask how many units of the product they would like to buy.
Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

If not, the app logs a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, it fulfills the customer's order.

This means the SQL database is updated to reflect the remaining quantity.
