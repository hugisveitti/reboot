var Events = require('./models/events.js');
var path = require("path");

module.exports = function(app){
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + './../public/index.html'));
    });

    app.get("/map", (req, res) => {

        res.sendFile(path.join(__dirname + './../public/map.html'));
    });

    app.get("/allevents", (req, res) => {
        Events.find((err, docs) => {
            if(err){
                console.log(err);
            } else {
                console.log('docs')
                console.log(docs);
                res.send(JSON.stringify(docs));
            }
        });
    });


    app.get("/addevent", (req, res) => {
        res.sendFile(path.join(__dirname + './../public/addEvent.html'))
    })
  
    app.get("/chatbot", (req, res) => {
        res.sendFile(path.join(__dirname + './../public/chatbot.html'))
    })
}
