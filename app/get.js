var Events = require('./models/events.js');

module.exports = function(app){
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });

    app.get("/map", (req, res) => {
        res.sendFile(path.join(__dirname + '/public/map.html'))
    });
}
