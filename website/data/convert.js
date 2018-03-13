// this only exists for converting json to the needed locations object array
// require this in server.js when needed

var fs = require('fs');
var json = require('../src/webvr/RPIVRMap/map.json');

var jsonData = JSON.parse(JSON.stringify(json));

fs.appendFileSync('location.js', "var locations = [\n", function(err) { if (err) throw err; });

for (var i = 0; i < jsonData.locations.length; i++) {
	var objString = "\t{\n";
	objString += "\t\tid: " + jsonData.locations[i].nodeNum + ",\n";
	objString += "\t\tbuilding: \"" + jsonData.locations[i].building + "\",\n";
	objString += "\t\tpoint: { lat: " + jsonData.locations[i].x + ", long: " + jsonData.locations[i].y + " },\n";
	objString += "\t\taddress: \"" + jsonData.locations[i].address + "\",\n";
	objString += "\t\turl: \"" + jsonData.locations[i].url + "\",\n";
	objString += "\t\toutdoor: " + jsonData.locations[i].outdoor + "\n";
	objString += "\t},\n"
	fs.appendFileSync('location.js', objString, function(err) {
		if (err) throw err;
	});
}

fs.appendFileSync('location.js', "];\n", function(err) { if (err) throw err; });