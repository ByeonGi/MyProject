var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./models/book');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT||8080;

var router = require('./routes')(app, Book);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('connected to mongod server');


})

mongoose.connect('mongodb://localhost/mongodb_tutorial');

var server = app.listen(port, function(){
    console.log("express server has start on port " + port);
})