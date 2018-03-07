var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	id: { type: Number, unique: true }, // previously nodeNum
	building: String,
	point: { long: Number, lat: Number },
	address: String,
	url: String, // could change
	outdoor: { type: Boolean, default: true }
});

module.exports = mongoose.model('location', locationSchema);