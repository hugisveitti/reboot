const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

require("./config/database.js");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

require('./app/get.js')(app);

app.listen(3000, () => {
    console.log("listening on port 3000");
});
