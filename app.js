

var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/assets',express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'pug')

var routeLogin = require('./app_server/route/LoginRoute');
var routeMyAlbum = require('./app_server/route/MyAlbumsRoute');

app.use('/login', routeLogin);
app.use('/myalbums', routeMyAlbum);

app.listen(8000);