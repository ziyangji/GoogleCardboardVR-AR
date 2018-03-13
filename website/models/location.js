var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	id: { type: Number, index: { unique: true } },
	building: String,
	point: { lat: Number, long: Number },
	address: String,
	url: String, // could change
	outdoor: { type: Boolean, default: true }
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;