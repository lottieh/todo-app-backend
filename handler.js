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


// module.exports.tasks = async event => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
