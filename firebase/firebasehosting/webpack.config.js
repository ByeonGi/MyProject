const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) =>{
    const config = {
        entry : {
            app : ['./src/app.js']
        },
        output : {
            filename : '[name].bundel.js',
            path : path.resolve(__dirname + '/public/', 'dist'),
        },
        optimization : {
            splitChunks:{
                cacheGroups:{
                    commons : {
                        test : /[\\/]node_modules[\\/]/,
                        name : 'vendors',
                        chunks : 'all'
                    }
                }
            }
        },
        node : {
            fs : 'empty',
            console : false,
            net : 'empty',
            tls : 'empty'
        }


    }
    if(options.mode == 'development'){
        config.plugins =[
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title : 'Development',
                showErrors : true,
            })
        ];
        config.devtool = 'inline-source-map';
        config.devServer = {
            hot : true,
            host : '0.0.0.0',
            contentBase: path.resolve(__dirname + '/public/', 'dist'),
            stats : {
                color : true
            }
        };

    }else{
        config.plugins = [
            new CleanWebpackPlugin(['dist'])
        ]
    }
    return config;
}