var locations = [];
$.ajax({
	type: "GET",
	url: "map.json",
	dataType: "json",
	success: function(data){
		mybody = mySite(data);
		locations = data.locations;
	}, 
	error: function(msg){
		// error checking 
		// console.log();
		alert("Please Reload!");
	}
});

function mySite(data){

	var select1 = document.getElementById("start");
	var select2 = document.getElementById("end");
	for (var i = 0; i < data.locations.length; i ++){
		if (data.locations[i].building != "") {
			// create new options and attach them to the "start" and "end" selectors
			var option1 = document.createElement("option");
			var option2 = document.createElement("option");		
			// parse the data read from data and store them into variables
			var building = data.locations[i].building;
			var x = data.locations[i].x;
			var y = data.locations[i].y;
			var address = data.locations[i].address;
			var img = data.locations[i].src;
			option1.text = building;
			option2.text = building;
			select1.add(option1, i+1);
			select2.add(option2, i+1);
			option1.value = address;
			option2.value = address;
		}
	}
}

function findPath(locations, path) {
	// think about making an efficient data structure?
	var images = []
	for (var i = 0; i < path.length; ++i) {
		// find the closest location
		for (var j = 0; j < locations.length; ++j) {
			// I think coordinates of Darrin might be slightly off, showing up at weird spots in paths or not at all
			if (Math.abs(path[i].lat() - locations[j].x) < 0.001 && Math.abs(path[i].lng() - locations[j].y) < 0.001) {
				if (!images.includes(locations[j].building)) {
					images.push(locations[j].building); // this should be src, when we get that information
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
	// aframe js stuff can go here
	// need the src for each building
	// need to queue images and allow user to click through them
}
