var webpack = require('webpack');

module.exports = {
    entry : [
        
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-deb-server'
    ],

    output : {
        path : '/',
        filename : 'bundle.js'
    },

    devServer: {
        hot : true,
        filename :'bundle.js',
        publicPath : '/',
        historyApiFallback : true,
        contentBase : './public',
        proxy : {
            "**" : "http://localhost:3000"
        }
    },

    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    
    ],

    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                use : ['babel-loader'],
                exclude : /node_modules/
            }
        ]
    }
}