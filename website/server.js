const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config/db.js')

console.log('hello from server.js')

var url = '';
var dbName = 'rpivrar';
// connect to database here

var app = express();

app.use(express.static('/home/main/Desktop/rpivrar/repo/website'));
// consider adding cors?

app.get('/', function(req, res) {
	console.log('home');
	console.log("__dirname: " + __dirname);
	res.sendFile(path.join(__dirname + '/index.html'));
})

var port = 3000;

app.get('/about', function(req, res) {
	console.log('about!!!')
	res.send('about');
})

app.get('/contact', function(req, res) {
	res.send('send us your stuff');
})

const server = app.listen(port, function() {
	console.log('listening on port ' + port);
});