const express = require('express')
var cors = require('cors') // Enable CORS
var timeout = require('express-timeout-handler');
const app = express()
const port = 8000

const scraper = require('./scraper.js');

// Options for Timeout Module
var options = {
  timeout: 10000,
  onTimeout: function(req, res) {
    res.status(503).send('Service unavailable. Please retry.');
  } };

  // Enabling cors for frontend. The same could be done using React Proxy
var corsOptions = {
    origin: ["http://localhost:3000/","http://localhost:3000"], 
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(timeout.handler(options)); // Timeout package for express  
  app.use(express.json());      
  app.use(express.urlencoded({ extended: true })); 

  app.options('*', cors(corsOptions)); 

  // Here the front-end will send the POST request using fetch
  app.post('/fetch', cors(corsOptions), async function(req, res) {
    const url = req.body.url;
    const selector = req.body.selector;
    
    // Calling scraper function
    const data = await scraper(url, selector);
    // Returning scrped data response 
    res.end(JSON.stringify(data));  
  });

  // Just for checking if Backend is working or not
  app.get('/', cors(corsOptions), async function(req, res) {
    res.send("Don't worry! The Backend is Running")
}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));