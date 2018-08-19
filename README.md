# Eat-Da-Burger
Eat-Da-Burger is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern and uses Node and MySQL to query and route data in the app. It uses Handlebars to generate the HTML.

**Problem it solves:** \
Allows burgers to be tracked accoridng to whether they are devoured or not.

**How solved:** \
New burgers are added and as they are devoured, their state updates and is persisted in the database.  The burger and it's state is presented on the UI with the ability to change state.

**Technical approach:** \
Creation of a burger logger that persists the burger name and state in MySQL.  Node, Express, Handlebars and a homemade ORM is used implementing the MVC design pattern.

## Getting Started

1. Clone the repository locally
2. Setup the database by running the db/schema.sql and db/seeds.sql files.
3. Modify the config/connection.js file with the hostname, port, user, password, and database of your db
4. Run the below from the root directory of the project via the terminal:

```
# install needed packages
npm install express
npm install body-parser
npm install express-handlebars
npm install mysql

# start the server
node server.js

# navigate to the browser and enter
https://localhost:8080
```

1. Enter One or More New Burgers
2. Click on the Devour button to change the state of a specific burger
3. Click on the Delete button to delete a burger.


### Prerequisites

Node, NPM, MySql, Express, Handlebars

### Installing

To get a development environment up and running, clone the repository locally.  You will need node installed, npm, express, handlebars and mysql.    

## Running tests

Testing was done to create, read, update and devour burgers.

## Deployment

The project should be run from the browser by specifying http://localhost:8080 after starting node.

The project is hosted on heroku at https://calm-meadow-47544.herokuapp.com/ 
(https://git.heroku.com/calm-meadow-47544.git)

## Built With

The following npm packages are used: express, express-handlebars, body-parser, mysql

**Technologies**\
JavaScript, Node, HMTL, CSS, Handlebars, Express, MySQL

## Contributing

N/A

## Versioning

This is version 1.0

## Authors

* **Jenni Coleman** - initial project

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

N/A
