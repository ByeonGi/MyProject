// const path = require('path');

// module.exports = {
//     entry :{
//         app :['./src/index.js']
//     },
//     output:{
//         filename : '[name].bundle.js',
//         path : path.resolve(__dirname, 'dist')
//     }
// }
// //설정이 없던 상태와 달라진 것은 번들링된 파일 이름이 app.bundle.js로 달라진것 뿐


// module.exports = (env, options) =>{
//     const config = {
//         entry : {
//             app : ['./src/index.js']
//         },
//         output : {
//             filename : '[mame].bundle.js',
//             path: path.resolve(__dirname, 'dist')
//         }
//     }
//     return config;
// }
// //첫번째 인자는 커맨드라인에서 전달해주는 --env옵션들이 객체형태로 전달된다.
// //webpack.EnbiromentPlugin, webpackDefinPlugin를 이용하면 구현 코드에서도 해당 변수들으르
// //전역에서 사용할수있게 도와준다. 4버전 이하에서는 --env옵션을 이용해 어떤 빌드인지 구분했지만,
// //이제는 그럴필요 x, 
// //두번째 인자에서는 커맨드라이네서 전달되는 모든 옵션이 객체 형태로 전달된다. 여기에 mode 프로퍼티로 빌드 정보가 넘어온다.

// module.exports = (env, options)=>{
//     const config = {
//         entry:{
//             app:['./src/index.js']
//         },
//         output:{
//             filename : '[name].bundle.js',
//             path : path.resolve(__dirname, 'dist')
//         }
//     }
//     if(options.mode === 'development'){
//         //...development 설정
//     }
//     else{
//         //...production 설정
//     }
    
//     return config;
// }

// const CleanWebpackPlugin = require('clean-webpack-plugin');

// module.exports = (env, options)=>{
//     const config = {
//         entry : {
//             app:['./src/index.js']
//         },
//         output : {
//             filename : '[name].bundle.js',
//             path : path.resolve(__dirname, 'dist')
//         }
//     }

//     if(options.mode === 'developments'){

//     }
//     else {
//         config.plugins = [
//             new CleanWebpackPlugin(['dist'])
//             //매 프로덕션 빌드마다 dist 디렉토리는 깔끔하게 지워진다.
//         ];
//     }

//     return config;
// }

//development 빌드를 따로 만들일은 없으므로 development빌드 설정은 오전히 개발 서버 설정이다
//webpack -dev -sever 를 위한 설정을 하고 htmlWebpackPlugin으로 서버를 띄울 때 마다 임시
//index.html 파일을 만들어 사용한다.
//그리고 Hot Module Replacemnet(HMR)도 설정한다.
//HMR은 코드에 변경이 생겨 다시 빌드할 때 매번 브라우저를 리로드할  필요 없이 변경된 모듈만 바로 교체하는 기능이다.
//그래서 현재 테스트 중인 스테이트가 계속 유지된다는 장점도 있다.

// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
// const htmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = (env, options) =>{
//     const config = {
//         entry : {
//             app :['./src/index.js']
//         },
//         output : {
//             filename : '[name].bundle.js',
//             path : path.resolve(__dirname, 'dist')
//         }
//     }
//     if(options.mode === 'developments'){
//         config.plugins = [
//             new webpack.HotModuleReplacementPlugin(),
//             new htmlWebpackPlugin({
//                 title : 'Development',
//                 showErrors: true
//                 //에러 발생시 메시지가 브라우저 화면에 노출된다.
//             })
//         ];

//         config.devtool = 'inline-source-map';

//         config.devServer = {
//             hot : true,//서버에서 HMR을 켠다
//             host : '0.0.0.0',//디폴트로는 'localhost'로 잡혀 있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서 는 0.0.0.0으로 설정해야한다.
//             contentBase : './dist',
//             stats:{
//                 color : true
//             }
//         };
//     }
//     else{
//         config.plugins = [
//             new CleanWebpackPlugin(['dist'])
//         ];
//     }

//     return config;
// }

//기본에 CommonsChunkPlugin을 이용해 사용에 맞게 자동으로 번들 파일을 분리했던 기능을 splitChunk
//옵션을 통해 할 수 있다. splitChunk를 이용하면 대형 프로젝트에서 거대한 번들 파일을 적절히 분리하고 나눌 수 있다.
//파일 사이즈, 비동기 요청 횟수 등의 옵션에 따라 자동으로 분리할 수 있고 정규식에 따라서특정 파일들만 분리 할 수 이쏘고
//혹은  특정 엔트리 포인트를 분리할 수 있다. 번들 파일을 적절히 분리하면 브라우저 캐시를 전략적으로 활용 할 수 있으며
//초기 로딩속도를 최적화 할 수도 있다. 물론 프로젝트의 필요에 따라 엔트리 포인트를 분리해서 여러가지 번들
//파일을 만들때도 있다.


const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options)=>{
    const config = {
        entry : {
            app : ['./src/index.js']
        },
        output : {
            filename : '[name].bundle.js',
            path : path.resolve(__dirname, 'dist')
        },
        optimization : {
            splitChunks : {
                cacheGroups:{
                    commons : 
                    {
                        test: /[\\/]node_modules[\\/]/,
                        name : 'vendors',
                        chunks : 'all'
                    }
                }
            }
        }
        //cachegroups는 명시적으로 특정 파일을 청크로 분리할 때 사용
        //여기서는 Common이란 청크를 분리한다. 내용을 살펴보면 test를 사용해 대산이되는 파이릉ㄹ 정규식으로 잡는다.
        //node_modules디렉터리에 있는 파일들이다. name은 청크로 분리할 때 이름으로 사용될 파일명이다.
        //우리의 설정에서난 output.filename옵션에 [name]에 대치될 내용이기도 하다. chunks는 모듈의 종류에 따라
        //청크에 포함할지말지를 결정하는 옵션이다. initial과 async 그리고 all이 있다.
        //all을 사용하는데 말 그대로 test 조건에 포함되는 모든 것을 분리하겠다는 뜻이다.
        //initial은 초기 로딩에 필요한 경우, async은 import()를 이용해 다이나믹하게 사용되는 경우에 분리한다.
    }
    if(options.mode==='development'){
        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title : 'Development',
                showErrors : true
            })
        ];

        config.devtool = 'inline-source-map';

        config,devServer = {
            hot : true,
            host : '0.0.0.0',
            contentBase : path.resolve(__dirname, 'dist'),
            stats:{
                color : true
            }
        };
    }else{
        config.plugins = [
            new CleanWebpackPlugin(['dist'])
        ];
    }
    return config;
}