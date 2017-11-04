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
