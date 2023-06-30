# El Rancho Web Page Project Documentation

## Overview

This project is a restaurant web page built using React.js, Sass, Node.js, Express.js, MongoDB, Mongoose, ePayco payment gateway, and Auth0 for user account management. The goal of the project is to create a mobile and interactive website where users can view the restaurant's menu, make reservations, place orders online, process payments securely, and manage their user accounts.

## Project Structure

The project follows a typical structure for a React.js application with a server-side component. Here's an overview of the main directories and files:

- **client**: Contains the React.js client-side code.

  - **src**: Contains the source code for the React components and styles.
    - **components**: Contains reusable React components.
    - **styles**: Contains Sass files for styling the components.
    - **main.jsx**: The entry point for the React application.
  - **public**: Contains static assets and the HTML file for the React application.

- **server**: Contains the server-side code.
  - **routes**: Contains Express.js routes for handling API requests.
  - **models**: Contains Mongoose models for interacting with the MongoDB database.
  - **app.js**: The entry point for the Node.js server.

## Dependencies

The project relies on the following dependencies:

- React.js: A JavaScript library for building user interfaces.
- Sass: A CSS extension language for styling the application.
- Node.js: A JavaScript runtime for running server-side code.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- ePayco: A payment gateway for processing online payments securely.
- Auth0: A platform for managing user authentication and authorization.

## Setup and Installation

To set up and run the project locally, follow these steps:

1. Clone the client's repository: `git clone https://github.com/juandiegovelsol/rancho-front.git`
2. Clone the server's repository: `git clone https://github.com/juandiegovelsol/rancho-back.git`
3. Navigate to the client's directory: `cd rancho-front`
4. Navigate to the client's directory: `cd rancho-back`
5. Install the dependencies:
   - For the client: `cd rancho-front && npm install`
   - For the server: `cd rancho-back && npm install`
6. Start the server:
   - In the server directory: `npm run dev`
7. Start the client:
   - In the client directory: `npm run dev`
8. Access the application in your browser at `http://localhost:5173`.

## Features

The restaurant web page project includes the following features:

1. Menu: Users can view the restaurant's menu, including categories, dishes, and prices.
2. Reservations: Users can make reservations by selecting the date, time, and number of guests.
3. Online Ordering: Users can place orders online by selecting dishes from the menu and specifying any dietary preferences or special requests.
4. Authentication and Authorization: The project includes user authentication and authorization functionality using Auth0. Users can sign up, log in, and access protected routes based on their roles.
5. Payment Gateway Integration: The project integrates with the ePayco payment gateway to process online payments securely.
6. Database Integration: The project integrates with MongoDB using Mongoose to store and retrieve data.

## API Endpoints

The server exposes the following API endpoints for client-server communication:

- `GET /user/admin/:key/:value`: Retrieves all the users.
- `GET /user/:key/:value`: Retrieves one user.
- `POST /user`: Creates a new user.
- `PUT /user/:key/:value`: Updates user including its logged status.
- `PUT /user/admin/:key/:value/:key1/:value1/`: Updates speciffic user role.
- `POST /menu/admin/:key/:value`: Creates a new dish.
- `GET /menu/`: Retrieves the menu.
- `PUT /menu/`: Updates dish information and image.
- `DELETE /menu/:key/:value/:id`: Errase a dish.
- `POST /order/:key/:value`: Creates a new order.
- `GET /order/:key/:value`: Retrieves all orders.
- `GET /order/order/:key/:value`: Retrieves one order.
- `GET /order/user/:key/:value`: Retrieves speciffic users orders.
- `PUT /order/:key/:value`: Updates order status.
- `DELETE /order/:id`: Errase an order.

## Roadmap

Future enhancements and features planned for the restaurant web page project include:

- Implementing additional payment gateways for increased flexibility.
- Adding a review and rating system for dishes.
- Enhancing the user interface with animations and transitions.
- Improving accessibility and ensuring WCAG compliance.
- Integrating third-party delivery services for online orders.
