var express = require('express');
var app = express();
var port = 3001;
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Set the default location of app to /app directory
app.use(express.static(__dirname + "/app"));

//Tell Express to listen at this specific port
app.listen(port, function() {
    console.log("Listening on port: " + port);
});

//Body-parser info
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({
    extended: false
}));

//Connect to database with Mongoose
mongoose.connect("mongodb://localhost/database");

var db = mongoose.connection;

function handleError(error) {
    console.log(error)
}

//Error handling
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

////Require all necessary models
//var Model = require('.models/Model.js');

//Route handling
app.get('/', function(req,res){
    res.send('Hello World')
});