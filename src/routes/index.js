const express = require('express');
const cards = require('./cardRoute.js');


module.exports = app => {
  app.use(
    express.json(),
    cards
  );
}