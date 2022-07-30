const express = require('express');

//set up express app
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware for serving static files 
app.use(express.static('public'));

// ## TO DO - Link up routes 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//specifies the port on which we want our app to listen

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);