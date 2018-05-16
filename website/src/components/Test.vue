<template>
	<div>
		<div v-html="html"></div>
		<!-- <h1>testing</h1> -->
		<!-- <div>{{ text }}</div> -->
	</div>
</template>

<style>
	
</style>

<script>
	var axios = require('axios');

	export default {
		name: 'Test',
		data: function() {
			return {
				html: 	'<body id="mybody" class="text-center"><header><a id="logo" href="#"><img id="rpi" src="rpilogo.png" width="400" height="70"></a><a id="rcos" href="https://rcos.io"> RCOS </a><a id="rpi" href="http://www.rpi.edu"> RPI </a><a id="git" href="https://github.com/ZiniuYu/GoogleCardboardVR-AR"> GitHub Repo </a></header><h2> GoogleCardboard VR/AR </h2><p> <i> This is a RCOS project to utilize Google Cardboard to contribute to <a href="https://aframe.io/"> aframe</a> </i> </p><div style="margin-left: 20px"><label for "start"> <b>Origin</b> </label><select class="buildings" id="start" name="start"></select></div></br><div style="margin-left: 20px"><label for "end" > <b>Destination</b> </label><select class="buildings" id="end" name="end"></select></div></br><button class="btn" id="submitPath" value="submit"> VR View </button><button class="btn" id="submit2" value="submit2"> Google View </button><br/><br/><br/><br/><br/><hr><header class="text-center"> <button id="map1"> Google Map View </header><div id="map"></div><hr></body>',
				text: ""
			}
		},
		mounted() {
			axios.get('http://localhost:3000/src/webvr/RPIVRMapOld/index.html').then(response => {
			// axios.get('http://localhost:3000/src/webvr/RPIVRMap/index.html').then(response => {
				console.log("response.data");
				console.log(response.data);
				this.html = response.data;
			})
		}
	}
</script>