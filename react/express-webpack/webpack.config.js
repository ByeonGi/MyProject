module.exports = {
    entry : './src/index.js',

    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },

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