const nodeExternals = require('webpack-node-externals');

module.exports = {
    target:'node',
    externals : [nodeExternals()],
}

//webpack.config.js 가 아닌 이름의 파일을 설정 파일로 쓰고 싶다면
//"build" : "webpack --mode development --config 설정 파일명"