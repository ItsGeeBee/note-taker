const express = require('express');

//set up express app
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up use of static files CSS, HTML etc
app.use(express.static('public'));

// ## TO DO - Link up routes 


// ## TO DO - App.listening 