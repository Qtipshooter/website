//server.js
//Quinton Graham 2023
//Main Server for my personal Website

const express = require('express');
const path = require('path');
const { CLIENT_RENEG_WINDOW } = require('tls');
const LogFile = require('./src/backend/LogFile');
const app = express();
const port = 3000;

log = new LogFile('./log.txt');

//Request logging
app.use((req, res, next) => {
  log.logReq(req);
  next();
});

//Uses folder 'static' for path '/static'
app.use('/static', express.static('static'))

//Main Application Directory
app.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  log.logMsg(`\nServer up and running`);
});