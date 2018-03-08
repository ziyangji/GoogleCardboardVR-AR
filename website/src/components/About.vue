<template>
	<!-- <div class="container-fluid" v-bind:style="{'background-image': 'url(' + image + ')'}"> -->
	<div class="container-fluid">
		<!-- <h1>About</h1> -->
		<a-scene embedded>
			<a-sky :src="image"></a-sky>
		</a-scene>
	</div>
</template>

<style scoped>
	h1 {
		color: white;
	}
	.container-fluid {
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

<script>
	console.log("hello from About.vue")
	export default {
		name: 'About',
		data() {
			return {
				image: 'src/assets/groupPicture.jpg'
			}
		}
	}
</script>
