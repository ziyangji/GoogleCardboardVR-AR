
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
	console.log(map);
	directionsDisplay.setMap(map);

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	}
	
	$("#submitPath").on("click", function(e) {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	});
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
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
			// directionsDisplay.setDirections(response);
			findPath(locations, response.routes[0].overview_path);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
