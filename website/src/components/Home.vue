<template>
	<!-- <div class="container-fluid" v-bind:style="{'background-image': 'url(' + image2 + ')'}"> -->
	<!-- Will loading the VR image be annoyingly slow? -->
	<div class="container-fluid">
		<!-- <h1>Home</h1> -->
		<a-scene embedded>
			<a-sky :src="image2"></a-sky>
		</a-scene>
	</div>
</template>

<style>
	.container-fluid {
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

<script>
	console.log("hello from Home.vue")
	export default {
		name: 'Home',
		data() {
			return {
				image: 'src/assets/nearempac.jpg',
				image2: 'src/assets/nearempacequirectangular.jpg'
			}
		}
	}
</script>