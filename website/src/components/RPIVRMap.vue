<!-- should be similar to index.html in RPI map program -->
<template>
	<div class="container">
		<div class="form-group">
			<br/>
			<div>
				<label> <b>Origin</b> </label>
				<select class="buildings form-control" id="start" name="start">
				</select>
			</div>
			<div>
				<label> <b>Destination</b> </label>
				<select class="buildings form-control" id="end" name="end">
				</select>
			</div>
			<br/>
			<button v-on:click="" class="btn btn-default" id="submitPath" value="submit"> VR View </button>
			<button v-on:click="" class="btn btn-default" id="submit2" value="submit2"> Google View </button>
			<div id="map">
			</div>
		</div>
	</div>
</template>

<style>
	.container {
		/*padding-top: 20px;*/
	}
</style>

<script>
	import initMap from '../webvr/RPIVRMap/pathInitiate.js';

	export default {
		name: 'VR-Map',
		methods: {
			vrView : function(event) {

			},
			mapView: function(event) {

			}
		}
	};
</script>