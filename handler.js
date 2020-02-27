'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA
});

// req - request , res - response
//retrieve tasks 
app.get('/tasksURL', function (req, res) {
  connection.query('SELECT * FROM `tasks` WHERE `userId` = "1"', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    if (error) {
      console.error("Your query had a problem with fetching tasks", error);
      res.status(500).json({ errorMessage: error });
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
  // Take input from client and information of the task to be created
  const taskToInsert = req.body;
  // Take that information and pre-populate an SQL INSERT statement and execute
  connection.query('INSERT INTO `tasks` SET ?', taskToInsert, function (error, results, fields) {
    // error will be an Error if one occurred during the query
    if (error) {
      console.error("Your query had a problem with adding tasks", error);
      res.status(500).json({ errorMessage: error });
    }
    else {
      // Output the task that has been created
      res.json({
        task: taskToInsert
      });
    }
  })
});

app.put('/tasksURL/:taskId', function (req, res) {
  //take the task to edit
  connection.query(' UPDATE `tasks` SET `description` = ?, `completed` = ?  WHERE `taskId` = ?', [req.body.description, req.body.completed, req.body.taskId], function (error, results, fields) {
    // error will be an Error if one occurred during the query
    if (error) {
      console.error("Your query had a problem with editing tasks", error);
      res.status(500).json({ errorMessage: error });
    }
    else {
      res.json({
        message: 'Your task has been edited'
      });
    }
  })
});

app.delete('/tasksURL/:taskId', function (req, res) {

  // work out which task needs deleting
  const taskToDelete = req.params.taskId;
  // Run DELETE SQL command
  connection.query('DELETE FROM `tasks` WHERE `taskId` = ?', taskToDelete, function (error, results, fields) {
    if (error) {
      console.error("Your query had a problem with deleting your task", error);
      res.status(500).json({ errorMessage: error });
    }
    else {
      // Return to client info about task that has been deleted
      res.json({
        deletedTask: taskToDelete,
        message: "The above task was deleted"
      });
    }
  })
});



module.exports.tasks = serverless(app);

//        the above .tasks needs to match our function in our .yml file 

