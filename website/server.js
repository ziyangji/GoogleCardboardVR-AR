const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db'); // needed?
const Location = require('./models/location');
const Path = require('./models/path');
const queries = require('./queries');
const bodyParser = require('body-parser');

const newtuples = require('./data/map_new.js')

var port = 3000;

mongoose.connect(config.db).then(
	() => { console.log('Connected successfully to rpivrardb') },
	err => { console.log('Can\'t connect to db') }
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


var app = express();

var dir = __dirname; // this will probably need to be updated

app.use(express.static(dir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// I don't think this is actually needed since this isn't the image server
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

// bad but I just need things to work
var imageData;


/* website routes */
app.get('/', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})

app.get('/about', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})

app.get('/contact', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})


/* WebVR program routes */
app.get('/vr-map', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})

app.get('/vr-path', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
	res.sendFile(path.join(dir + 'src/webvr/RPIVRMapOld/showPath.html'));
})

app.get('/imageData', function(req, res) {
	res.json(imageData);
})

app.post('/imageData', function(req, res) {
	imageData = req.body;
	res.send(req.body);
})


/* Queries */
app.get('/query/buildings', queries.buildings);

app.get('/query/outdoor-locs', queries.outdoorLocs);


const server = app.listen(port, function() {
	console.log('listening on port ' + port);
});

// look up
// - state management
// - redux
// - insomnia and postman