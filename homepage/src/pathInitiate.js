
// users click on two parts of a map of RPI campus (first click is start, second is destination)
// use that with Google directions api to get "steps" to destination
// finds path in latitude and longitude coordinates
// find closest points in map.json to the lat/long of steps, set up order
// now you can move through images until you get to the location
function initMap() {
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: 42.7285, lng: -73.677}
	});
	directionsDisplay.setMap(map);
	
	//vr view
	$("#submitPath").on("click", function(e) {
		calculateAndDisplayRoute(directionsService, directionsDisplay, true);
	});
	//google view
	$("#submit2").on("click", function(e) {
		calculateAndDisplayRoute(directionsService, directionsDisplay, false);
	});
	//inside view 
	$("#inside").on("click", function(e) {
		var images = []
		for (var i = 0; i < data.locations.length; i ++){
			if(data.locations[i].building == document.getElementById('start').value && data.locations[i].outdoor=="flase"){
				if (!images.includes(locations[j])) {
					images.push(locations[j]);
				}
			}
		}
		console.log("Images:");
		for (var i = 0; i < images.length; ++i) {
			console.log(images[i]);
		}
		showInside(images);
	});
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, vr) {
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		travelMode: 'WALKING'
	}, function(response, status) {
		if (status == 'OK') {
			// response if the directions result
			console.log(response)
			for (var i = 0; i < response.routes[0].overview_path.length; ++i) {
				console.log("latitude: " + response.routes[0].overview_path[i].lat() + "  longitude: " + response.routes[0].overview_path[i].lng());
			}
			// use following line for Google View
			if (vr) {
				findPath(locations, response.routes[0].overview_path);
			} else {
				directionsDisplay.setDirections(response);
			}
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
