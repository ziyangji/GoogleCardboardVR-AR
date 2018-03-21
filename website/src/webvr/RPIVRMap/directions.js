var locations = [];

export default function appendBuildingNames(location) {
	var select1 = document.getElementById("start");
	var select2 = document.getElementById("end");

	// I need to make sure locations are unique
	for (var i = 0; i < location.length; ++i) {
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");
		var building = location[i].building;
		option1.text = building;
		option2.text = building;
		var address = location[i].address;
		option1.value = address;
		option2.value = address;
		select1.add(option1, i+1);
		select2.add(option2, i+1);
	}
}

function findPath(locations, path) {
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
}


function showPath(images) {
	var imageData = JSON.stringify(images);
	// sessionStorage.setItem('images', images);
	// it might be better to write to JSON file, which would be easier w/ node.js
	window.localStorage.setItem('images', imageData);
	console.log(sessionStorage.getItem('images'));
	location.href='showPath.html'; 
}