'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; // import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const Memo = new Schema({
//     writer: String,
//     contents: String,
//     starred: [String],
//     date: {
//         created: { type: Date, default: Date.now },
//         edited: { type: Date, default: Date.now }
//     },
//     is_edited: { type: Boolean, default: false }
// });

// export default mongoose.model('memo', Memo);


var Memo = new Schema({
    writer: String,
    contents: String,
    starred: [String],
    date: {
        created: { type: Date, default: Date.now },
        edited: { type: Date, default: Date.now }
    },

    is_edited: { type: Boolean, default: false }
});

exports.default = _mongoose2.default.model('meno', Memo);