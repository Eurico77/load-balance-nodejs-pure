const http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const produtosServiceProxy = httpProxy('http://localhost:3333');
const lojaServiceProxy = httpProxy('http://localhost:8081');

app.get('/produtos', (req, res, next) => {
    produtosServiceProxy(req, res, next);
})

app.post('/produtos', (req, res, next)=> {
   produtosServiceProxy(req, res, next);
})

app.get('/lojas', (req, res, next) => {
    lojaServiceProxy(req, res, next);
})

app.post('/lojas', (req, res, next) => {
   lojaServiceProxy(req, res, next);
})

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = http.createServer(app);
server.listen(4000);