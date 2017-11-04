// $("#mybody").hide();
$.ajax({
	type: "GET",
	url: "map.json",
	dataType: "json",
	success: function(data){
		mybody = mySite(data);
		// console.log();
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
