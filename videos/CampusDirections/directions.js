var locations = [];
$.ajax({
	type: "GET",
	url: "map.json",
	dataType: "json",
	success: function(data){
		mybody = mySite(data);
		locations = data.buildings;
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
	for (var i = 0; i < 6; i ++){
		// create new options and attach them to the "start" and "end" selectors
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");		
		// parse the data read from data and store them into variables
		var building = data.buildings[i].building;
		var x = data.buildings[i].x;
		var y = data.buildings[i].y;
		var address = data.buildings[i].address;
		var img = data.buildings[i].src;
		option1.text = building;
		option2.text = building;
		select1.add(option1, i+1);
		select2.add(option2, i+1);
		option1.value = address;
		option2.value = address;
	}
}

function findPath(locations, path) {
	// think about making an efficient data structure?
	var images = []
	for (var i = 0; i < path.length; ++i) {
		// find the closest location
		for (var j = 0; j < locations.length; ++j) {
			console.log("hi");
			// if the difference between x and y on path and x and y at location are small enough,
			// add to array
			// might need to check there aren't duplicates (not sure to do it here or at end)
			if (Math.abs(path[i].x - locations[j].x) < 0.001 && Math.abs(path[i].y - locations[j].y) < 0.001) {
				images.push(location[j].building);
			}
		}
	}
	console.log(images);
}
