# marketplace

A virtual marker where sellers can advertise products and servers for potential buyers

## Steps I followed

1.  creted server.js
2.  npm packages required in server.js

- body-parser
- express
- express-handlebars
- method-override
- mysql

3.  npm init

- npm install body-parser --save
- npm install express
- npm install express-handlebars
- npm install method-override
- npm install mysql

4.  went into controller (routes) folder and created routes files.

- references to express and express.router
- setup base royte ('/' and referenced index)
- deleted some index example files that were in boiler template as they were causing issues with the index reference
- connection to server successful

5.  Create/use main.handlebars and index.handlebars in view folder

- main.handlebars has the basi html layout
- index.handlebars has the where we put data
- PROBLEM displaying object products_data which is all the info in our mySQL database. needs to be fixed.

6.  server.js modified to reference:

- controller/routes
- var routes = require('./routes/htmlRoutes.js');
- app.use('/', routes);
- (express.static(\_\_dirname +'/public'));

7.  Needed to export controller/routes from

- apiRoutes.js
- htmlRoutes.js
- module.export = router;
- already in boiler code that was provided to us

8.  Setup mySQL database with some dummy data

- added mySQL template used to model/schema.sql
- sold column added with boolean value so we can remove from displayed screen if sold = true. Logic needs to be worked out later.
- productsdb created in mySQL with products table. Run schema.sql in mySQL
- FIX: additional columns should be added such as imageURL...

9.  Now that database has info config file needed

- connection.js = houses all of mySQL data for connection, then export that connection
- orm.js = the connection is then imported (mySQl) with orm
- FIX/ADD: CRUD from sequelize needs to be added to orm.js

10. Models folder

- required in our ORM
- ADD: will need all our methods that we will be using inorder to modify our ORM so that it works with our database (productsdb).

11. In htmlRoutes.js file

- var express = require('express');
- var router = express.Router();
- var products = require('../models/products.js')
- then passed in products_data in our function to send to handlebars. products_data is an object which has all the data in our mySQL database.

## PROBLEMS STUFF TO ADDRESS

1.  getting the products_data to display all the information properly in handlebars.
2.  need to create a post section in order to add a product/classifed to our productsdb.
3.  need to figure out how to upload(POST) and image to mySQL and then take the image from mySQL and display it (GET).
4.  we should create a seond table to show users and all the products associated with the seller...
5.  Style sheets are not being referenced correctly. Not sure what is wrong?
6.  .....
