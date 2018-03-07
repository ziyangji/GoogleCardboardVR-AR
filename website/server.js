const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db.js') // needed?
const location = require('./models/location')

var port = 3000;

console.log('hello from server.js')
console.log("__dirname: " + __dirname);

mongoose.connect('mongodb://localhost:27017/rpivrardb').then(
	() => { console.log('Connected successfully to rpivrardb') },
	err => { console.log('Can\'t connect to db') }
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var app = express();

// this will probably need to be updated
var dir = __dirname;

app.use(express.static(dir));

app.get('/', function(req, res) {
	console.log('home');
	res.sendFile(path.join(dir + '/index.html'));
})

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