<template>
	<div class="container-fluid">
		<br/>
		<div class="row">
			<div class="col-md-6 col-xs-12">
				<h2><b>Contact</b></h2>
				<p>Submit your virtual and augmented reality videos!</p>
				<p>If you have questions about submitting material or contributing to this project in other ways, contact us in one of the following ways.</p>
				<ul class="list-unstyled">
					<li>Shoshana Malfatto (malfas@rpi.edu)</li>
					<li>Ziyang Ji (jiz@rpi.edu)</li>
					<li>Our Slack channel #google-cardboard-vr on the RCOS Slack</li>
				</ul>
			</div>
			<div class="col-md-6 col-xs-12">
				<a-scene embedded>
					<a-sky :src="image" rotation="5 -90 0"></a-sky>
				</a-scene>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container-fluid {
		width: 100%;
		height: 100%;
	}
	.row {
		height: 100%;
		padding-bottom: 35px;
	}
</style>

<script>
	console.log("hello from Contact.vue")
	export default {
		name: 'Contact',
		data() {
			return {
				image: "src/assets/empac.jpg"
			}
		}
	}
</script>