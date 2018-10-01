import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const Schema = mongoose.Schema;

const Account = new Schema({
    username : String,
    password : String,
    created : {type : Date, default : Date.now}
});

Account.methods.generateHash = function(password){
    return bcrypt.hashSync(password, 8);
}

Account.methods.validateHash = function(password){
    return bcrypt.compareSync(password, this.password);
}

export default mongoose.model('account', Account);
//account Schema를 만들고 model로 만들어서 export한다.
//Schema와 Model의 차이 Shema는 데이터의 틀일 뿐이고 Model은 실제 데이터베이스에 접근 할 수 있게 해주는 클래스이다.

