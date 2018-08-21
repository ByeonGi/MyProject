var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var Book = require('./models/book');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = require('./routes')(app, Book);
// 라우터 모듈을 불러와서 app, book에 전달해줍니다.

var server = app.listen(port, function(){
    console.log('server open port number : ' + port);

});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongoose open success');
});

mongoose.connect('mongodb://localhost/mongodb_tutorial', {useNewUrlParser:true});