var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookShema = new Schema({
    title : String,
    author : String,
    published_date : {type : Date, default : Date.now}
})

var Book = mongoose.model('book', bookShema);
module.exports = mongoose.model('book', bookShema);