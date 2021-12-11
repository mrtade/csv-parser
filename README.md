# Quick start

Once the project has been downloaded, run `npm install`.
Run `npm run build` to compile typescript source to javascript modules, to the build directory.
Then run `npm run serve` to start up server from the root of the project.

# Approach

Mock data is setup initially for testing functionality as its built. I used a stub csv file in the db folder to test parsing csv on file using node stream before passing an 'internet url' to the server for parsing a downloadable csv.

# API

### Get all customers on the MongoDB database

GET /customers-all

### Get particular customer on the MongoDB database, with the customer \_id on the database

GET /customer/**id**

### Get all orders on the MongoDB database

GET /orders-all

### Get particular order on the MongoDB database, with the order \_id on the database

GET /order/**id**

### Get particular order on the MongoDB database, with url encoded body that has a key of 'url', with the actual csv url as value

POST /orders-import

# Code Structure

## models

The order and customer MongoDB models are setup here. These models are used witthin the app to perform CRUD operations on the Mongo database.

## routes

The app routes are setup in here so they can called when the server is live.

## services

Core services the server offers are setup here. These are mainly database related services.

## stub

Sample data is stored here for initial testing. This can be used when there is no database setup yet to test the services locally.

## types

Types of the core databases collections, customers and orders are setup here. The types were setup to match the database types.

# Testing

After brief research, I opted to use Jest for testing but did not get very far...

# TODOs

Run unit and coverage tests. Testing is just setup at this stage but no tests are run.
More error handling coverage.
