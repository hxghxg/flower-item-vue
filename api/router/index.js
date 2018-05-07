const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const utilRes = require('../util/utilRes.js');
const utilMongo = require('../util/utilMongo.js');
const routerSign = require('./routerSign.js');
const routerMine = require('./routerMine.js');
const routerProduct = require('./routerProduct.js');

const app = express();
app.use(express.static(path.join(__dirname, '../../')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Accept,X-Requested-With,auth");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1')
    if(req.method=="OPTIONS") {
      res.sendStatus(200);
    }else{
      next();
    }
});

utilMongo.connect('huacom','mongodb://localhost:27017/');
app.use(bodyParser.urlencoded({extended:false}));
routerSign.register(app,{'jwt':jwt,'utilMongo':utilMongo,'utilRes':utilRes});

const filterJwt = function(req, res, next){
    var token = req.headers['auth'];
    if(!token){
        res.send(utilRes(false,{},'unauth'));
    }else{
        var oldtoken = jwt.decode(req.body.token,'secret');
        var d = (new Date().getTime())/1000;
        if(d <= oldtoken.exp){
            next();
        }else{
            res.send(utilRes(false,{},'unauth'));
        };
    };
};

routerProduct.register(app,{'utilMongo':utilMongo,'utilRes':utilRes,'jwt':jwt,'filterJwt':filterJwt});

routerMine.register(app,{'utilRes':utilRes,'jwt':jwt});

const server = app;
module.exports = {
    'listen':function(port){
        server.listen(port || 6655);
    }
};