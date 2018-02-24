<template>
	<div class="container">
		<!-- header, which should be at the top of every page -->
		<!-- It should probably become a drop down menu on mobile devices,
		but I still need to figure out how to see the VR programs -->
		<div class="container-fullwidth">
			<div class="row-fluid">
				<div class="navbar navbar-default navbar-fixed-top red">
					<router-link to="/" class="navbar-brand">VR/AR RPI</router-link>
					<router-link to="/about" class="navbar-brand">About</router-link>
					<router-link to="/contact" class="navbar-brand">Contact</router-link>
					
					<!-- WebVR programs menu -->
					<div class="dropdown">
						<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> WebVR <span class="caret"></span></button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenu">
							<li><a href="#">please work</a></li>
							<li role="separator" class="divider"></li>
							<!-- <li>
								<a href="../homepage/RPIVRMap/index.html">Campus Directions</a>
							</li> -->
						</ul>					
					</div>

				</div>
			</div>
		</div>

		<!-- actual content -->
		<div class="container content">
			<div>{{ message }}</div>
			<input v-model="message">
			<router-view></router-view>
		</div>

		<footer class="footer red">
			<div class="container">
				Other links
			</div>
			<div class="footer-copyright">
				<div class="container">
					RCOS 2017
				</div>
			</div>
		</footer>
	</div>
</template>

<style>
	body {
		margin-bottom: 60px;
	}
	.red {
		background-color: #d7001a;
		color: white;
	}
	.navbar {
		position: absolute;
		left: 0;
		width: 100%;
		height: 60px;
	}
	.navbar-brand {
		color: white;
	}
	.content {
		padding: 60px;
	}
	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 60px;
	}
	.footer-copyright {
		background-color: #c0001a;
	}
</style>

<script>
	export default {
		name: 'App',
		data() {
			return {
				message: 'hello from App.vue'
			}
		}
	}
</script>
