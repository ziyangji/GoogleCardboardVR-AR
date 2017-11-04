var locations = [];

// $("#mybody").hide();
$.ajax({
	type: "GET",
	url: "map.json",
	dataType: "json",
	success: function(data){
		mybody = mySite(data);
		// added by Shoshana, didn't see mySite function when I wrote this
		// var start = document.getElementById("start");
		// for (var i = 0; i < data.buildings.length; ++i) {
		// 	console.log(data.buildings[i].building);
		// 	start += "<option value=" + data.buildings[i].address + ">" + data.buildings[i].building + "</option>";
		// }
		locations = data.buildings;
	}, 
	error: function(msg){
		// console.log();
		alert("Please Reload!");
	}
});
function mySite(data){

	var select1 = document.getElementById("start");
	var select2 = document.getElementById("end");
	for (var i = 0; i < 6; i ++){
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");
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
			// I think coordinates of Darrin might be slightly off, showing up at weird spots in paths or not at all
			if (Math.abs(path[i].lat() - locations[j].x) < 0.001 && Math.abs(path[i].lng() - locations[j].y) < 0.001) {
				if (!images.includes(locations[j].building)) {
					images.push(locations[j].building);
				}
			}
		}
	}
	// test output
	console.log("Images:");
	for (var i = 0; i < images.length; ++i) {
		console.log(images[i]);
	}
}
