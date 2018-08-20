var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/book');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT||8080;

var router = require('./routes')(app,Book);

var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});

//connect to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    //connected to mongodb server
    console.log("connected to mongod server");

});

mongoose.connect('mongodb://localhost/mongodb_tutorial',{useNewUrlParser : true});
//mongoose.connect() 메소드로 서버에 접속을 할수 있고, 따로 설정할 파라미터가 다음과 같이설정
//mongoose.connect('mongodb://username:password@host:port/database?options..');
