'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express()

// req - request , res - response

app.get('/tasksURL', function (req, res) {
  res.json({
    message: 'Your API works!',
  })
});

module.exports.tasks = serverless(app);

//        the above .tasks needs to match our function in our .yml file 
