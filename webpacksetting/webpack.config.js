const nodeExternals = require('webpack-node-externals');

moduls.exports = {
    target : 'node',
    externals : [nodeExternals()],
}