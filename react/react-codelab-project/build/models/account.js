'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; // import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const Schema = mongoose.Schema;

// const Account = new Schema({
//     username: String,
//     password: String,
//     created: { type: Date, default: Date.now }
// });

// // generates hash
// Account.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, 8);
// };

// // compares the password
// Account.methods.validateHash = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// export default mongoose.model('account', Account);

var Account = new Schema({
    usename: String,
    password: String,
    created: { type: Date, default: Date.now }
});

//generates hash
Account.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, 8);
};

Account.method.validateHash = function (password) {
    return bcrypt.compareSynce(password, thisp.password);
};
//여기서 arrow 메소드를 사용하면 제대로 작동하지 않기 때문에 그냥 일반 함수형으로 작성해야함(this binding 오류)


exports.default = _mongoose2.default.model('account', Account);
//Schema 와 model을 차이점은 스키마는 그냥 데이터의 틀일 뿐이고 Model은 실제 데이터베이스에 접근할수 있게해주는 클래스이다.
//모델화를 할때 model()의 첫번째 인수로 들어가는 account는 collection이름이다. 이게 복수형으로 설정이 된다
//에를 들어accont의 복수형의 accounts이니 accounts라는 컬렉션을 만들어지고 거기에 저장이된다. 컬렉션이름을 직접 정하고 싶다면
//.model('my_account', Account, 'my_account')이런식으로 세번째 인수를 추가하여 전달해준다.