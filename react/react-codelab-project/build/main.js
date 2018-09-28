'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // import express from 'express';
// import path from 'path';

// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';

// import morgan from 'morgan'; // HTTP REQUEST LOGGER
// import bodyParser from 'body-parser'; // PARSE HTML BODY

// import mongoose from 'mongoose';
// import session from 'express-session';

// import api from './routes';


// const app = express();
// const port = 3000;
// const devPort = 4000;

// app.use(morgan('dev'));
// app.use(bodyParser.json());

// /* mongodb connection */
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => { console.log('Connected to mongodb server'); });
// // mongoose.connect('mongodb://username:password@host:port/database=');
// mongoose.connect('mongodb://localhost/codelab');

// /* use session */
// app.use(session({
//     secret: 'CodeLab1$1$234',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use('/', express.static(path.join(__dirname, './../public')));

// /* setup routers & static directory */
// app.use('/api', api);

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './../public/index.html'));
// });

// /* handle error */
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// app.listen(port, () => {
//     console.log('Express is listening on port', port);
// });

// if(process.env.NODE_ENV == 'development') {
//     console.log('Server is running on development mode');
//     const config = require('../webpack.dev.config');
//     const compiler = webpack(config);
//     const devServer = new WebpackDevServer(compiler, config.devServer);
//     devServer.listen(
//         devPort, () => {
//             console.log('webpack-dev-server is listening on port', devPort);
//         }
//     );
// }

var port = 3000;
var devPort = 4000;

var db = _mongoose2.default.connection;
db.on('error', console.error);
db.once('open', function () {
    console.log('Connected to mongodb server');
});
//mongoose.connect ('mongoose://username:password@host:port/database=');
_mongoose2.default.connect('mongodb://localhost/codelab');

// use session
app.use((0, _expressSession2.default)({
    secret: 'CodeLab&1&234',
    resave: false,
    saveUninitialized: true
}));

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));
app.use('/api', _routes2.default);
//서버 메인 파일에서 api 라우터를 불러오게 되면, http://URL/api/account/signup 이런식으로api를 사용할 수 있게된다.

// support client-side routing
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/hello', function (req, res) {
    return res.send('hello codelab');
});

app.listen(port, function () {
    console.log('express is listening on port ', port);
});

if (process.env.NODE_ENV = 'development') {
    console.log('Server is running on development mode');
    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-deb-server is listening on port ', devPort);
    });
}
//development 환경일때 개발 서버를 켜는 코드 추가