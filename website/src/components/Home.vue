<template>
	<!-- Will loading the VR image be annoyingly slow? -->
	<a-scene embedded>
		<a-sky :src="image2"></a-sky>
	</a-scene>
</template>

<style>

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