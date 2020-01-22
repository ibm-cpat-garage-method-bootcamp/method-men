const express = require('express');
const proxy = require("express-http-proxy");
const fs = require('fs');

const apiHost = process.env.API_HOST || 'localhost:3001';

// module.exports = function(app){
//   app.use('/api/data', (req, res) => {
//     fs.readFile('./server/data/db.json', 'utf8', (err, data) => {
//       console.log(data);
//     })
//     console.log('hit the thing');
//     console.log(process.cwd());
//     res.send('you got the data!!!');
//   });
// };

module.exports = function(app){
  app.use('/api/data', dataRequestHandler);
};

const dataRequestHandler = (req, res) => {
  fs.readFile('./server/data/db.json', 'utf8', (err, data) => {
    console.log(data);
  })
  console.log('hit the thing');
  res.send('you got the data!!!');
}