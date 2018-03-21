<!-- should be similar to index.html in RPI map program -->
<template>
	<div class="container" id="body">
		<div class="form-group">
			<br/>
			<div>
				<label><b>Origin</b></label>
				<select class="buildings form-control" id="start" name="start">
				</select>
			</div>
			<div>
				<label><b>Destination</b></label>
				<select class="buildings form-control" id="end" name="end">
				</select>
			</div>
			<br/>
			<div>
				<button v-on:click="vrView" class="btn btn-default" id="submitVR" value="submit"> VR View </button>
				<button v-on:click="mapView" class="btn btn-default" id="submitGoogle" value="submit2"> Google View </button>
			</div>
			<div id="map"></div>
		</div>
	</div>
</template>

<style>
	.container {
		/*padding-top: 20px;*/
	}
	#map {
		height: 500px;
    	width: 500px;
    	margin: 0 auto;
	}
</style>

<script>
	var axios = require('axios');
	var showPath = require("../webvr/RPIVRMap/showPath.js");
	// var directions = require("../webvr/RPIVRMap/directionsDb.js");
	import appendBuildingNames from "../webvr/RPIVRMap/directions.js";

	export default {
		name: 'VR-Map',
		data: function() {
			return {
				directionsService: "",
				directionsDisplay: "",
				buildings: []
			}
		},
		mounted() {
			this.loadData(); // why is buildings not set when I try to print it?

			console.log("map: ", google.maps);
			this.directionsService = new google.maps.DirectionsService();
			this.directionsDisplay = new google.maps.DirectionsRenderer();
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: {lat: 42.7285, lng: -73.677}
			});
			this.directionsDisplay.setMap(map);

			window.addEventListener('resize', this.handleResize);
		},
		methods: {
			calculateAndDisplayRoute : function(directionsService, directionsDisplay, vr) {
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
			},
			vrView : function(event) {
				this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, true);
			},
			mapView: function(event) {
				this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, false);
			},
			handleResize() {
				console.log("need to change map size!");
				// change px in #map css
			},
			loadData: function() {
				var url = 'http://localhost:3000/query/buildings';
				axios.get(url).then((response) => {
					this.buildings = response.data;
					console.log(this.buildings);
					console.log("length: " + response.data.length);

					appendBuildingNames(this.buildings);
				}).catch(error => {
					console.log(error);
				})
			}
		}
	};
</script>