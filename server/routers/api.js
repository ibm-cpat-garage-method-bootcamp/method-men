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
  app.post('/api/dataUpdate', dataUpdateHandler);
  app.post('/api/toggleUpdate', toggleUpdateHandler);
};

const dataRequestHandler = (req, res) => {
  fs.readFile('./server/data/db.json', 'utf8', (err, data) => {
    res.send(data);
  })
}

const dataUpdateHandler = (req, res) => {
  fs.readFile('./server/data/db.json', 'utf8', (err, data) => {
    fileData = JSON.parse(data);
    console.log(data)
    fileData.push({
      itemName: req.body.itemName,
      needed: 'Yes',
      aisle: req.body.aisle
    });
    fs.writeFile('./server/data/db.json', JSON.stringify(fileData), (err, data) => {
      console.log(data);
      res.send('you wrote a new file!!');
    })
  })
}

const toggleUpdateHandler = (req, res) => {
  let targetItem = req.body.itemName;
  fs.readFile('./server/data/db.json', 'utf8', (err, data) => {
    let fileData = JSON.parse(data);
    for (let i = 0; i < fileData.length; i++) {
      if (fileData[i].itemName === targetItem) {
        if (fileData[i].needed === 'Yes') {
          fileData[i].needed = 'No';
          break;
        } else if (fileData[i].needed === 'No') {
          fileData[i].needed = 'Yes';
          break;
        }
      }
    }
    fs.writeFile('./server/data/db.json', JSON.stringify(fileData), (err, data) => {
      console.log(data);
      res.send('You toggled an item!!!');
    });
  });
}