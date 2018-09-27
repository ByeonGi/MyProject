// import express from 'express';
// import path from 'path';

// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';

// import morgan from 'morgan'; // HTTP REQUEST LOGGER
// import bodyParser from 'body-parser'; // PARSE HTML BODY

// import mongoose from 'mongoose';
// import session from 'express-session';

// import api from './routes';


// const app = express();
// const port = 3000;
// const devPort = 4000;

// app.use(morgan('dev'));
// app.use(bodyParser.json());

// /* mongodb connection */
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => { console.log('Connected to mongodb server'); });
// // mongoose.connect('mongodb://username:password@host:port/database=');
// mongoose.connect('mongodb://localhost/codelab');

// /* use session */
// app.use(session({
//     secret: 'CodeLab1$1$234',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use('/', express.static(path.join(__dirname, './../public')));

// /* setup routers & static directory */
// app.use('/api', api);

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './../public/index.html'));
// });

// /* handle error */
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// app.listen(port, () => {
//     console.log('Express is listening on port', port);
// });

// if(process.env.NODE_ENV == 'development') {
//     console.log('Server is running on development mode');
//     const config = require('../webpack.dev.config');
//     const compiler = webpack(config);
//     const devServer = new WebpackDevServer(compiler, config.devServer);
//     devServer.listen(
//         devPort, () => {
//             console.log('webpack-dev-server is listening on port', devPort);
//         }
//     );
// }
import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';


const app = express();
const port =3000;
const devPort = 4000;

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{
    console.log('Connected to mongodb server');
});
//mongoose.connect ('mongoose://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/codelab');

// use session
app.use(session({
    secret : 'CodeLab&1&234',
    resave : false,
    saveUninitialized :true
}));

app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/api', api);
//서버 메인 파일에서 api 라우터를 불러오게 되면, http://URL/api/account/signup 이런식으로api를 사용할 수 있게된다.

// support client-side routing
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
})

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/hello', (req, res)=>{
    return res.send('hello codelab');

});

app.listen(port, () =>{
    console.log('express is listening on port ', port);
})


if(process.env.NODE_ENV = 'development'){
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler,config.devServer);
    devServer.listen(
        devPort, ()=>{
            console.log('webpack-deb-server is listening on port ', devPort);
        }
    )
}
//development 환경일때 개발 서버를 켜는 코드 추가