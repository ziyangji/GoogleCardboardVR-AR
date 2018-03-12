<template>
	<!-- put a text element in vr image -->
	<a-scene embedded>
		<a-sky :src="image" rotation="0 -90 0"></a-sky>
		<a-text value="Rensselaer\nPolytechnic\nInstitute\nin Virtual Reality" position="-1.5 2.5 -3"></a-text>
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
				image: 'src/assets/nearempacequirectangular.jpg'
			}
		}
	}
</script>