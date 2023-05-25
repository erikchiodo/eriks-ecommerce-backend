[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/mit)

# Erik’s ECommerce Back-end

## Description

This is a back-end application that allows a user to manage their products, tags, and product categories via GET, POST, PUT, DEL API Calls. User will need to use insomnia, postman (api tool) in order to impact data.

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Table of Contents

- [Story](#story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Story

> GIVEN a functional Express.js API

> WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
> THEN I am able to connect to a database using Sequelize

> WHEN I enter schema and seed commands
> THEN a development database is created and is seeded with test data

> WHEN I enter the command to invoke the application
> THEN my server is started and the Sequelize models are synced to 
the MySQL database

> WHEN I open API GET routes in Insomnia Core for categories, products, or tags
> THEN the data for each of these routes is displayed in a formatted JSON

> WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
> THEN I am able to successfully create, update, and delete data in my database

## Installation

dotenv, express, mysql2, sequelize

## Usage

Create env file with appropriate DB_NAME ("ecommerce_db"), DB_USER ("root"), and DB_PASSWORD (not applicable in author's case, but maybe applicable in your case).

Run npm install to add dependencies. 

CD to db folder and run source schema.sql file (in mysql2) to create ecommerce_db. CD to seeds folder and run source index.js to seed data to tables.

Run npm start to start server. Set up folder structure as you see in below snapshot.

<img width="1346" alt="Screen Shot 2023-05-22 at 11 35 16 AM" src="https://github.com/erikchiodo/eriks-weather-app/assets/122952630/ca04595a-a3e7-4b35-bca8-cb478a5e5054">


## Tag Routes:

> Delete Route: http://localhost:3001/api/tags/{:id}

> Put Route: http://localhost:3001/api/tags/{:id}

> Post Route: http://localhost:3001/api/tags

> Get Tag by ID: http://localhost:3001/api/tags/{:id}

> Get Tags: http://localhost:3001/api/tags


## Category Routes:

> Delete Route: http://localhost:3001/api/categories/{:id}

> Put Route: http://localhost:3001/api/categories/{:id}

> Post Route: http://localhost:3001/api/categories

> Get Tag by ID: http://localhost:3001/api/categories/{:id}

> Get Tags: http://localhost:3001/api/categories


## Product Routes:

> Delete Route: http://localhost:3001/api/products/{:id}

> Put Route: http://localhost:3001/api/products/{:id}

> Post Route: http://localhost:3001/api/products

> Get Tag by ID: http://localhost:3001/api/products/{:id}

> Get Tags: http://localhost:3001/api/products

## License

Erik's-ECommerce-Backend is licensed under [MIT](https://opensource.org/licenses/mit).

## Contributing

No contributors (aside from author)

## Tests

No tests

## Screenshots
See Demo Link Below

## Questions

Link to [Employee Tracker Assignment](https://github.com/erikchiodo/eriks-ecommerce-backend)

Link to [Demo](https://drive.google.com/file/d/1fi0LPGxP-_lmI5YQ4ULduFzYliFYmZFc/view)

If you need to contact me directly, here's my email: erikchiodo@gmail.com!