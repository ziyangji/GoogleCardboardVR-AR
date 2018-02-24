<template>
	<div class="container">
		<!-- header, which should be at the top of every page -->
		<!-- It should probably become a drop down menu on mobile devices,
		but I still need to figure out how to see the VR programs -->
		<div class="container">
			<nav>
				<div class="navbar navbar-default">
					<a href="" class="navbar-brand">VR/AR RPI</a>
					<router-link :to="{ name: 'About' }" class="navbar-brand">About</router-link>
					<router-view></router-view>
				</div>
			</nav>
		</div>
		<h1>Greetings from App.vue</h1>
		<div>{{ message }}</div>
		<input v-model="message">
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		name: 'App',
		data() {
			return {
				message: 'hi'
			}
		}
	}
</script>
