<!-- I may need to get rid of vr image because I need to have text content -->
<!-- I could have the map in the background -->
<template>
	<div class="container-fluid">
		<br/>
		<div class="row">
			<div class="col-md-6 col-xs-12 info">
				<h2><b>About Us</b></h2>
				<p>We are team of RPI students aiming to create virtual and augmented reality programs for the web that will be easily viewable with affordable platforms like Google Cardboard.</p>
				<p>This project is open source, so feel welcome to fork our <a href="https://github.com/ZiniuYu/GoogleCardboardVR-AR">Github repository</a> and contribute.</p>
			</div>
			<div class="col-md-6 col-xs-12">
				<a-scene embedded>
					<a-sky :src="image"></a-sky>
				</a-scene>
			</div>
		</div>
	</div>
</template>

<style scoped>
	a {
		color: gray;
	}
	.container-fluid {
		position: absolute;
		/*padding-top: 70px;*/
		padding-bottom: 100px;
		/*padding-right: 0px;
		padding-left: 0px;*/
		/*margin-right: auto;
		margin-left: auto;*/
		/*left: 0;*/
		/*bottom: 0;*/
		/*top: 0;*/
		height: 100%;
		/*width: 100%;*/
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
