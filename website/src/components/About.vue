<template>
	<a-scene embedded>
		<a-sky :src="image"></a-sky>
	</a-scene>
</template>

<style scoped>

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
