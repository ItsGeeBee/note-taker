const fs = require('fs');
const app = require('express').Router();
const { readFromFile,  writeToFile,} = require('../helper/utils');


// ## To Do - app.get
app.get('/', (req, res) =>
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)))
);

app.get('/api/notes', (req, res) =>
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)))
);

// ## To Do - app.post
app.post("/api/notes"), (req,res) =>{}
  writeToFile("./db.json").then



  // ## To Do - app.delete

