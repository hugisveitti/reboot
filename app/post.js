var Events = require('./models/events.js');
var path = require("path");

module.exports = function(app){



    app.post("/addevent", (req, res) => {
        console.log(req.body)
        var event = new Events(req.body);

        event.save((err, event) => {
            if(err){
                console.log("error", err);
                res.status(500).send("database error");
            }
            else {
                console.log("success")
                res.redirect("/addEvent");
            }
        });

    });
}
