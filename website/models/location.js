var mongoose = require('mongoose');

var location = new mongoose.Schema({
	id: Number, // previously nodeNum
	building: String,
	lon: Number,
	lat: Number,
	address: String,
	url: String, // could change
	outdoor: Boolean
});

module.exports = mongoose.model('location', location);