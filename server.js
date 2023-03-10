//server.js
//Quinton Graham 2023
//Main Server for my personal Website

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Request logging
app.use((req, res, next) => {
  //Logging implementation
});

//Uses folder 'static' for path '/static'
app.use('/static', express.static('static'))

//Application
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server up and running`);
  //logging implementation
});