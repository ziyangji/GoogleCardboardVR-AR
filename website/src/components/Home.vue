<template>
	<div>
		<h1>Home</h1>
		<!-- middle bar - do I want to stick with this design? -->
		<!-- <div class="container red bar">
			<div class="row">
				<div class="col-lg-12">
					<div>About</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<style>
	.bar {
		position: absolute;
		left: 0;
		width: 100%;
		height: 60px;
	}
</style>

<script>
	console.log("hello from Home.vue")
	export default {
		name: 'Home',
		data() {
			return {
				welcome: "welcome"
			}
		}
	}
</script>