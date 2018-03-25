var mongoose = require('mongoose');

var pathSchema = new mongoose.Schema({
	id: { type: Number, index: { unique: true } },
	// loc1: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
	// loc2: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }
	loc1: Number,
	loc2: Number
});

module.exports = mongoose.model('Path', pathSchema);


// when I want to find adjacent locations, I can query based on a specific
// id to get all of the adjacent locations