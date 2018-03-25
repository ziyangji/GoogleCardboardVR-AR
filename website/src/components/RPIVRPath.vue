<template>
	<a-scene>
		<a-assets id="assets">
			<!-- images (added in js) -->
			<img id="thumbnail" :src=backToMenu>
			<script id="button" type="text/html">
				<!-- button template, might not need if there's only one button? -->
	    		<a-entity class="link"
	    		geometry="primitive: sphere; radius: 0.5"
	    		material="color: #FFFFFF"
	    		position="3 0 -2"
				event-set__1="_event: mousedown; scale: 1 1 1"
		        event-set__2="_event: mouseup; scale: 1.2 1.2 1"
		        event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
		        event-set__4="_event: mouseleave; scale: 1 1 1"
	    		set-image="on: click; target: #loc; src: ${src}"
	    		set-building="on: click; target: #building">
	    		</a-entity>
	    	</script>
	    	<script id="textButton" type="text/html">
	    		<!-- template for plane buttons (can have image w/ text) -->
	    		<a-entity class="link"
				geometry="primitive: plane; height: 1; width: 1"
				material="shader: flat; src: #thumbnail"
				event-set__1="_event: mousedown; scale: 1 1 1"
		        event-set__2="_event: mouseup; scale: 1.2 1.2 1"
		        event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
		        event-set__4="_event: mouseleave; scale: 1 1 1"
		        set-page="on: click"></a-entity>
	    	</script>
		</a-assets>
		<!-- sky (in js file) -->
		<a-entity id="links" layout="layout: line; margin: 1.5" position="-3 -1 -4">
			<!-- button using template, created in js file -->
		</a-entity>
		<!-- building text, created in js file -->
		<a-camera>
			<a-cursor id="cursor">
				   <a-animation begin="click" easing="ease-in" attribute="scale"
                   		fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
      			   <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                   		from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
			</a-cursor>
		</a-camera>
	</a-scene>
</template>

<style>
	
</style>

<script>
	var axios = require('axios');
	import init from '../webvr/RPIVRMap/showPath.js'

	export default {
		name: 'VR-Path',
		data: function() {
			return {
				backToMenu: 'src/webvr/RPIVRMap/backToMenu.png',
				outdoorLocs: []
			}
		},
		created() {
			// If I can somehow load images here to speed things up, that would be great
			// this.loadData();
		},
		mounted() {
			init();
		},
		methods: {
			loadData : function() {
				var url = 'http://localhost:3000/query/outdoor-locs';
				axios.get(url).then((response) => {
					this.outdoorLocs = response.data;

					this.$nextTick(() => {
						console.log(this.outdoorLocs);
					})

				}).catch((error) => {
					console.log(error);
				});
			}
		}
	};
</script>