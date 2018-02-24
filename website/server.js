const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config/db.js')

console.log('hello from server.js')
console.log("__dirname: " + __dirname);

var url = '';
var dbName = 'rpivrar';
// connect to database here

var app = express();

// this will probably need to be updated
var dir = __dirname;

app.use(express.static(dir));

app.get('/', function(req, res) {
	console.log('home');
	res.sendFile(path.join(dir + '/index.html'));
})

var port = 3000;

app.get('/about', function(req, res) {
	console.log('about!!!')
	res.sendFile(path.join(dir + '/index.html'));
})

app.get('/contact', function(req, res) {
	console.log('send us your stuff');
	res.sendFile(path.join(dir + '/index.html'));
})

const server = app.listen(port, function() {
	console.log('listening on port ' + port);
});