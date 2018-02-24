const express = require('express');
const path = require('path');
// const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config/db.js')

console.log('hello from server.js')

var url = '';
var dbName = 'rpivrar';
// connect to database here

var app = express();

// app.use(cors()); // not sure if I'm keeping this yet

app.get('/', function(req, res) {
	console.log('home');
	// res.send('hello');
	res.sendFile(path.join(__dirname + '/index.html'))
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