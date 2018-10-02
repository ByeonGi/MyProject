var path = require('path');

module.exports = {
    entry : [
        './src/index.js',
        './src/style.css'
    ],
   
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },

    module : {
        rules : [
            {
                test : /\.js$/,
                use : {
                    loader : 'babel-loader'
                },
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use :[
                    {loader : 'style-loader'},
                    {loader : 'css-loader'}
                ]
            }
        ]
    },
    resolve : {
        modules : [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}