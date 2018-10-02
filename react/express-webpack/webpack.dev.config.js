var webpack = require('webpack');

module.exports = {
    entry : [

         './src/index.js',
         'webpack-dev-server/client?http://0.0.0.0:3001',
         'webpack/hot/only-dev-server'
    ],
    

    output : {
        path : '/',
        filename : 'bundle.js'
    },

    devServer : {
        hot : true,
        filename : 'bundle.js',
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

    //ES6 문법과 JSX 문법을 사용한다
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            }
        ]
    }
}