const express = require('express');

const Fruits = require('../fruits/fruitsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/fruits', (req, res) => {
  Fruits.getAll()
    .then(fruits => {
      res.status(200).json(fruits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
