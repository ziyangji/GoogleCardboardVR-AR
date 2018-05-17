const mongoose = require('mongoose');
const config = require('./config/db');
const Location = require('./models/location');


// to allow for selecting start and end locations
exports.buildings = function(req, res) {
	var query = Location.find({ 'building': { $ne : "" } });
	query.select('building address point');
	query.exec(function (err, locations) {
		if (err) throw err;
		res.json(locations);
	})
}

// to allow exploring outdoors
exports.outdoorLocs = function(req, res) {
	var query = Location.find({ 'outdoor': true });
	query.select('building point address url direction');
	query.exec(function (err, locations) {
		if (err) throw err;
		res.json(locations);
	})
}
