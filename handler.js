'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
const mysql = require ('mysql');

const connection = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER ,
  password : process.env.DB_PASSWORD ,
  database : process.env.DB_SCHEMA
});

// req - request , res - response
//retrieve tasks 
app.get('/tasksURL', function (req, res) {
  connection.query('SELECT * FROM `tasks` WHERE `userId` = "1"', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    if(error) {
      console.error("Your query had a problem with fetching tasks", error);
      res.status(500).json({errorMessage: error});
    }
    else {
      // Query was successful
      res.json({
        tasks: results
      });
    }
  });
});

app.post('/tasksURL', function (req, res) {
    // Accept information from the client
  // about what task is being created
  // Take that information and pre-populate an SQL INSERT statement
  // Execute the statement
   // Return to the client information about the task that has been created
    res.json({
    message: 'Your Post works'
  });
});

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

