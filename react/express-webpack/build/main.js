'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV === "development") {
    console.log("server si running on development mode");

    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-deb-server is listening on port', debPort);
    });
}
// 경로 '/'로 들어오는 요청들은 public 폴더로 정적 라우팅 한다.
app.use('/', _express2.default.static(__dirname + '/../public'));

app.use('/posts', _posts2.default);

app.get('/hello', function (req, res) {
    return res.send('Can you hear me ?');
});

var server = app.listen(port, function () {
    console.log('Express listening on port');
});