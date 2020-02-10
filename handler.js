'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express()

// req - request , res - response

app.get('/tasksURL', function (req, res) {
  res.json({
    message: { id: uuidv4(), description: 'Write CV', Date: 0, Completed: false, important: false },
  })
});
module.exports.tasks = serverless(app);

//        the above .tasks needs to match our function in our .yml file 