var paths = [
	{
		id: 1,
		loc1: 4,
		loc2: 7
	},
	{
		id: 2,
		loc1: 4,
		loc2: 38
	},
	{
		id: 3,
		loc1: 6,
		loc2: 17
	},
	{
		id: 4,
		loc1: 17,
		loc2: 55
	}
];

// add data to table
var mongoose = require('mongoose');
var Path = require('../models/path');

Path.collection.drop();

Path.insertMany(paths, function(err, docs) {
	if (err) {
		console.log('insertMany error')
	} else {
		console.log(docs.length + ' paths successfully stored')
	}
});