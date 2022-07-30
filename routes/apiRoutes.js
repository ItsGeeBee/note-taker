const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const apiRoutes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile,} = require('../helper/utils');


// Read db.json file and show all saved notes 
apiRoutes.get('/', (req, res) =>
  readFromFile('db/db.json').then((data) => 
  res.json(JSON.parse(data)))
);

apiRoutes.get('/notes', (req, res) =>
  readFromFile('db/db.json').then((data) => 
  res.json(JSON.parse(data)))
);


// ## To Do - app.post
apiRoutes.post("/notes", (req,res) =>{


  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };

    readAndAppend(newNote, 'db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

 
apiRoutes.delete('/notes/:id', (req, res) => {
  const notesId = req.params.id;
  readFromFile('db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => 
      
      note.id !== notesId);

      writeToFile('db/db.json', result);

      res.json(`Item ${notesId} has been deleted 🗑️`);
    });
});


  module.exports = apiRoutes