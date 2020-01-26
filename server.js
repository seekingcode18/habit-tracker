const express = require('express');
const server = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const bodyparser = require('body-parser');

server.use(bodyparser.urlencoded({extended: true}));

server.get('/', (req,res) => {
  res.send('Home page')
})

server.listen(port, () => {
  console.log(`Habit tracker is running on part ${port}`)
});
