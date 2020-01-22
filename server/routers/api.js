const express = require('express');
const proxy = require("express-http-proxy");

const apiHost = process.env.API_HOST || 'localhost:3001';

module.exports = function(app){
  app.use('/api/test', (req, res) => {
    console.log('hit the thing');
    res.send('asdfasasdfsadfsdfsdfsdfdfasd');
  });
};
