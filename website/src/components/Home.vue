<template>
	<!-- <div class="container" v-bind:style="{'background-image': 'url(' + image + ')'}"> -->
	<div class="container">
		<h1>Home</h1>
		<!-- <img class="img-fluid" :src='image'/> -->
	</div>
</template>

<style>
	.bar {
		position: absolute;
		left: 0;
		width: 100%;
		height: 60px;
	}
	.container {
		/*background-image: url("../assets/nearempac.jpg");*/
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
				welcome: "welcome",
				image: 'src/assets/nearempac.jpg'
			}
		}
	}
</script>