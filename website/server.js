var express = require("express");
var MongoClient = require('mongodb').MongoClient;

var url = '';
var dbName = 'rpivrar';

var app = express();

app.get('/', function(req, res) {
	res.send('hello');
})

app.get('/about', function(req, res) {
	res.send('about');
})

app.get('/contact', function(req, res)) {
	res.send('send us your stuff');
}

app.listen(3000);
