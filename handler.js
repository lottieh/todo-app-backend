'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express()
import uuidv4 from 'uuid/v4';
// req - request , res - response

app.get('/tasksURL', function (req, res) {
  res.json({
    
    tasks: [
      { id: uuidv4(), description: 'Write CV', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Learn to Code', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Find a Flat', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Test it', Completed: true, important: false },

    ],

   completedTasks: [
      { id: uuidv4(), description: 'Buy Christmas presents', Completed: true },
      { id: uuidv4(), description: 'Buy some cheese', Completed: true },
      { id: uuidv4(), description: 'Get a new Laptop', Completed: true },
      { id: uuidv4(), description: 'Read the yellow pages', Completed: true }
    ],
  
});
})

module.exports.tasks = serverless(app);

//        the above .tasks needs to match our function in our .yml file 
