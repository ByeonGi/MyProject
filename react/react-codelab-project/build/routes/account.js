'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _account = require('../models/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import express from 'express';
// import Account from '../models/account';

// const router = express.Router();

// /*
//     ACCOUNT SIGNUP: POST /api/account/signup
//     BODY SAMPLE: { "username": "test", "password": "test" }
//     ERROR CODES:
//         1: BAD USERNAME
//         2: BAD PASSWORD
//         3: USERNAM EXISTS
// */
// router.post('/signup', (req, res) => {
//     // CHECK USERNAME FORMAT
//     let usernameRegex = /^[a-z0-9]+$/;

//     if(!usernameRegex.test(req.body.username)) {
//         return res.status(400).json({
//             error: "BAD USERNAME",
//             code: 1
//         });
//     }

//     // CHECK PASS LENGTH
//     if(req.body.password.length < 4 || typeof req.body.password !== "string") {
//         return res.status(400).json({
//             error: "BAD PASSWORD",
//             code: 2
//         });
//     }

//     // CHECK USER EXISTANCE
//     Account.findOne({ username: req.body.username }, (err, exists) => {
//         if (err) throw err;
//         if(exists){
//             return res.status(409).json({
//                 error: "USERNAME EXISTS",
//                 code: 3
//             });
//         }

//         // CREATE ACCOUNT
//         let account = new Account({
//             username: req.body.username,
//             password: req.body.password
//         });

//         account.password = account.generateHash(account.password);

//         // SAVE IN THE DATABASE
//         account.save( err => {
//             if(err) throw err;
//             return res.json({ success: true });
//         });

//     });
// });

// /*
//     ACCOUNT SIGNIN: POST /api/account/signin
//     BODY SAMPLE: { "username": "test", "password": "test" }
//     ERROR CODES:
//         1: LOGIN FAILED
// */
// router.post('/signin', (req, res) => {

//     if(typeof req.body.password !== "string") {
//         return res.status(401).json({
//             error: "LOGIN FAILED",
//             code: 1
//         });
//     }

//     // FIND THE USER BY USERNAME
//     Account.findOne({ username: req.body.username}, (err, account) => {
//         if(err) throw err;

//         // CHECK ACCOUNT EXISTANCY
//         if(!account) {
//             return res.status(401).json({
//                 error: "LOGIN FAILED",
//                 code: 1
//             });
//         }

//         // CHECK WHETHER THE PASSWORD IS VALID
//         if(!account.validateHash(req.body.password)) {
//             return res.status(401).json({
//                 error: "LOGIN FAILED",
//                 code: 1
//             });
//         }

// ALTER SESSION
//         let session = req.session;
//         session.loginInfo = {
//             _id: account._id,
//             username: account.username
//         };

//         // RETURN SUCCESS
//         return res.json({
//             success: true
//         });
//     });
// });

// /*
//     GET CURRENT USER INFO GET /api/account/getInfo
// */
// router.get('/getinfo', (req, res) => {
//     if(typeof req.session.loginInfo === "undefined") {
//         return res.status(401).json({
//             error: 1
//         });
//     }

//     res.json({ info: req.session.loginInfo });
// });

// /*
//     LOGOUT: POST /api/account/logout
// */
// router.post('/logout', (req, res) => {
//     req.session.destroy(err => { if(err) throw err; });
//     return res.json({ sucess: true });
// });


// /*
//     SEARCH USER: GET /api/account/search/:username
// */
// router.get('/search/:username', (req, res) => {
//     // SEARCH USERNAMES THAT STARTS WITH GIVEN KEYWORD USING REGEX
//     var re = new RegExp('^' + req.params.username);
//     Account.find({username: {$regex: re}}, {_id: false, username: true})
//     .limit(5)
//     .sort({username: 1})
//     .exec((err, accounts) => {
//         if(err) throw err;
//         res.json(accounts);
//     });
// });

// // EMPTY SEARCH REQUEST: GET /api/account/search
// router.get('/search', (req, res) => {
//     res.json([]);
// });

// export default router;


var router = _express2.default.Router();

router.post('/signup', function (req, res) {
    // res.json({success : true});
    var usernameRegex = /^[a-z0-9]+$/;

    if (!usernameRegex.test(req.body.username)) {
        return res.status(400).json({
            error: 'BAD USERNAME',
            code: 1
        });
    }

    //CHECK PASS LENGTH
    if (req.body.password.length < 4 || typeof req.body.password !== 'string') {
        return res.status(400).json({
            error: "BAD PASSWORD",
            code: 2
        });
    }

    //CHECK USER EXISTANCE
    _account2.default.findOne({
        username: req.body.username }, function (err, exists) {
        if (err) throw err;
        if (exists) {
            return res.status(409).json({
                error: "USERNAME EXISTS",
                code: 3
            });
        }
        //CREATE ACCOUNT
        var account = new _account2.default({
            username: req.body.username,
            password: req.body.password
        });

        account.password = account.generateHash(account.password);

        //SAVE IN THE DATABASE
        account.save(function (err) {
            if (err) throw err;
            return res.json({ success: true });
        });
    });
});

router.post('/signin', function (req, res) {
    if (typeof req.body.password !== "string") {
        return res.status(401).json({
            error: "login error",
            code: 1
        });
    }

    _account2.default.findeOne({ username: req.body.username }, function (err, account) {
        if (err) throw err;

        if (!account) {
            return res.status(401).json({
                error: 'login failed',
                code: 1
            });
        }
        if (!account.validateHash(req.body.password)) {
            return res.status(401).json({
                error: 'login faild',
                code: 1
            });
        }

        var session = req.session;
        session.loginInfo = {
            _id: account._id,
            username: account.username
        };

        return res.json({
            success: true
        });
    });
});

router.get('/getinfo', function (req, res) {

    if (typeof req.session.loginInfo === "undefined") {
        return res.status(401).json({
            error: 1
        });
    }

    res.json({ info: req.session.loginInfo });
});

router.post('/logout', function (req, res) {

    req.session.destroy(function (err) {
        if (err) throw err;
    });
    return res.json({ success: true });
});

exports.default = router;