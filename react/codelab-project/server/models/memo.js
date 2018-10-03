import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Memo = new Schema({
    writer : String,
    contents :String,
    starred : [String],
    date : {
        created : {type : Date, default : Date.now},
        edited : {type : Boolean, default : false}
    },
    is_edited : {type : Boolean, default :false}
});

export default mongoose.model('memo', Memo);