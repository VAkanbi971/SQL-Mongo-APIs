var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookiParser = require('cookie-parser');
var logger = require('morgon');


var express = require('express');
var router = express.Router();


/* GET home page. */
router
.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  }
  );
})
.post('/setdata', async (request,response) => {
  console.log("request: ", request)
  console.log("request body: ", request.body)
  console.log("response: ", response)
  console.log("response body: ", response.body)
  response.redirect('/')
  response.end();
})

module.exports = router;
