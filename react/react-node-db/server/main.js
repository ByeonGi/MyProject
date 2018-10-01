import express from 'express';
import path from 'path';
import WebpackDevServer from'webpack-dev-server';
import webpack from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';


const app = express();
const port = 3000;
const devPort = 4000;
const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () =>{
    console.log('connected to mongodb server');
});
mongoose.connect('mongodb://localhost/codelab');

app.use('/', express.static(path.join(__dirname, './../public')));
app.use(morgan('deb'));
app.use(bodyParser.json());
//morgan : HTTP요청을 로그하는 미들웨어
//body-parser : 요청에서 JSON을 파싱할때 사용되는 미들웨어
app.use(session({
    secret:'CodeLab1$1$234',
    resave : false,
    saveUninitialized : true
}));
app.use('/api', api);
//에러처리
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
//라우터에서 throw  err가 실행되면 이 코드가 실행된다.

app.get('/hello', (req, res) =>{
    return res.send('hello CodeLab');
});

app.listen(port, () =>{
    console.log('Express is listening on port ', port);
});

if(process.env.NODE_ENV == 'development'){
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () =>{
            console.log('webpack-dev-server is listening on port', devPort);
        }
    )
}

