var webpack = require('webpack');

module.exports = {
    entry : [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack/hot/only-dev-server'
    ],

    output : {
        path : '/',
        filename : 'bundle.js'
    },

    devServer : {
        hot : true,
        filename : 'bundle.js',
        publicPath: '/',
        historyApiFallback : true,
        contentBase : './public',
        proxy : {
            "**" : "http://localhost:3000"
        },
        stats : {
            assets : false,
            colors : true,
            version : false,
            hash : false,
            timings : false,
            chunks :false,
            chunksModules : false
        }
    },
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module : {
        loadres : [
            {
                test :/\.js$/,
                loaders : ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory : true,
                    presets : ['es2015', 'react']
                })],
                exclude : /node_modules/,
            }
        ]
    }
}