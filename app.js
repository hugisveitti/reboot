const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.listen(3000, () => {
    console.log("listening on port 3000");
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/map", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/map.html'))
})
