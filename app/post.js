require('dotenv').config();

var Events = require('./models/events.js');
var path = require("path");
var request = require('request');
var querystring = require('querystring');



module.exports = function (app) {

  app.post("/addevent", (req, res) => {
    console.log(req.body)
    var event = new Events(req.body);

    event.save((err, event) => {
      if (err) {
        console.log("error", err);
        res.status(500).send("database error");
      } else {
        console.log("success")
        res.redirect("/addEvent");
      }
    });

  });

  app.post("/askbot", (req, res) => {
    var message = req.body.message;
    
    var endpointKey = process.env.LUIS_MODEL_URL;
    // append query string to endpoint URL
    var luisRequest = endpointKey + message;
    // HTTP Request
    request(luisRequest,
      function (err, response, body) {
        if (err)
          console.log(err);
        else {
          res.send(JSON.parse(body));
        }
      });
  })
}
