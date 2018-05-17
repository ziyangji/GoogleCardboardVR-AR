var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	id: { type: Number, index: { unique: true } },
	building: String,
	point: { lat: Number, long: Number },
	address: String,
	url: String,
	outdoor: { type: Boolean, default: true },
	direction: { type: Number, default: 0.0 }, // north
	date: { type: Date, default: Date.now },
	neighbors: { type: Array, "default": [Number] }
});

module.exports = mongoose.model('Location', locationSchema);