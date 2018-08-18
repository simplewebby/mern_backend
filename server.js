const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body parser Middleware
app.use(bodyParser.json());

// Config

const db = require('./config/key').mongoURI;

// Connect To Mongo

mongoose
  .connect(db)
  .then(()=> console.log('MongoDB connected...'))
  .catch(err => console.log(err));







//Use Route
app.use('/api/items', items);

// Port for Heroku
  const port = process.env.POST || 5000;
  app.listen(port, ()=>console.log(`Server started on port ${port}`));