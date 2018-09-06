var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title : String,
    author : String,
    published_date : {type:Date, default : Date.now}
});

var Book = mongoose.model('book', bookSchema);
//해당 document가 사용 할 collection의 단수적 표현, 즉, 이모델에서는 books collection
//을 사용 이렇게 자동으로 단수적 표현을 복수적형태로변환 ㅎ여 그걸 collection이름으로사용

//var dataSchema = new Schema({..}, {collection : 'COLLECTION_NAME'});
//collection을 이름을 정하고 싶다면 , schema를 만들때 따로 설정해야함


module.exports = mongoose.model('book', bookSchema);