 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
    //Endpoint 1
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
    //Endpoint 2
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
    //Endpoint 3
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
    //Endpoint 4
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});

// Add optional endpoint with names of the months
    //Define months array
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

app.get("/fetchMonth/:num", (req, res) => {
    // Parse the number from the request parameters
    let num = parseInt(req.params.num);

    // Check if number is valid month number
    if(num < 1 || num > 12 ) {
        //Send an error message if number is not valid
        res.send("Not a valid month number");
    } else {
        // Send the corresponding month name if number is valid4
        res.send(months[num -1]);
    }
})
