'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express()


// req - request , res - response
//retrieve tasks 
app.get('/tasksURL', function (req, res) {
  const yourTasks = [
    { id: 1, description: 'Write CV', Completed: false, important: false },
    { id: 2, description: 'Learn to Code', Completed: false, important: false },
    { id: 3, description: 'Find a Flat', Completed: false, important: false },
    { id: 4, description: 'Test it', Completed: true, important: false }

  ]
  res.json({
    tasks: yourTasks
  });
});

app.post('/tasksURL', function (req, res) {
    res.json({
    
  });
});message: 'Your Post works'

app.put('/tasksURL/:taskId', function (req, res) {
  
  res.json({
    message: 'Your Put works'
  });
});

app.delete('/tasksURL/:taskId', function (req, res) {
 
  res.json({
    message: 'Your Delete works'
  });
});


module.exports.tasks = serverless(app);

//        the above .tasks needs to match our function in our .yml file 

