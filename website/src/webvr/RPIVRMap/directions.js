var locations = [];

var directions = {
	appendBuildingNames: function(locations){
		var select1 = document.getElementById("start");
		var select2 = document.getElementById("end");
		var added = new Set();
		for (var i = 0; i < locations.length; i++){
			if (locations[i].building != "" && !added.has(locations[i].building)) { // && building not already in list
				// create new options and attach them to the "start" and "end" selectors
				var option1 = document.createElement("option");
				var option2 = document.createElement("option");		
				// parse the data read from data and store them into variables
				var building = locations[i].building;
				var address = locations[i].address;
				var lat = locations[i].point.lat;
				var long = locations[i].point.long;
				option1.text = building;
				option2.text = building;
				option1.setAttribute('lat', lat);
				option1.setAttribute('lng', long);
				option2.setAttribute('lat', lat);
				option2.setAttribute('lng', long);
				select1.add(option1, i+1);
				select2.add(option2, i+1);
				option1.value = address;
				option2.value = address;
				added.add(locations[i].building);
			}
		}
	},
	findPath: function(locations, path) {
		// think about making an efficient data structure?
		var images = []
		for (var i = 0; i < path.length; ++i) {
			// find the closest location
			for (var j = 0; j < locations.length; ++j) {
				// I think coordinates of Darrin might be slightly off, showing up at weird spots in paths or not at all
				if (Math.abs(path[i].lat() - locations[j].x) < 0.0003 && Math.abs(path[i].lng() - locations[j].y) < 0.0003) {
					if (!images.includes(locations[j])) {
						images.push(locations[j]);
					}
				}
			}
		}
		// test output
		console.log("Images:");
		for (var i = 0; i < images.length; ++i) {
			console.log(images[i]);
		}
		showPath(images);
	},
	showPath: function(images) {
		var imageData = JSON.stringify(images);
		location.href='showPath.html'; 
	}

}

export default directions;