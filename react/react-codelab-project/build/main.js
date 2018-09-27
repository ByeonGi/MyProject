'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import express from 'express';
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
var app = (0, _express2.default)();
var port = 3000;

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));

app.get('/hello', function (req, res) {
    return res.send('hello codelab');
});

app.listen(port, function () {
    console.log('express is listening on port ', port);
});