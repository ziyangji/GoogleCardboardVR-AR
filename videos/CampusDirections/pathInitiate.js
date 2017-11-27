
// users click on two parts of a map of RPI campus (first click is start, second is destination)
// use that with Google directions api to get "steps" to destination
// finds path in latitude and longitude coordinates
// find closest points in map.json to the lat/long of steps, set up order
// now you can move through images until you get to the location
function initMap() {
	var markerArray = [];

	var directionsService = new google.maps.DirectionsService;

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, markerArray);
	}
	
	$("#submitPath").on("click", function(e) {
		calculateAndDisplayRoute(directionsService, markerArray);
	});
}

function calculateAndDisplayRoute(directionsService, markerArray) {
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
			findPath(locations, response.routes[0].overview_path);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
