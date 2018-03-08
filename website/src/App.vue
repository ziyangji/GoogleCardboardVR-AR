<template>
	<div class="container-fluid">
		<!-- header, which should be at the top of every page -->
		<nav class="navbar navbar-expand-md sticky-top red">
			<div class="navbar-header">
				<h2><router-link to="/" class="navbar-brand">VR/AR RPI</router-link></h2>
			</div>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="toggle menu">|||</button>

			<div class="collapse navbar-collapse" id="menu">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/contact">Contact</router-link>
					</li>
					<li>
						<!-- WebVR programs menu -->
						<div class="dropdown show nav-item nav-link">
							<button class="btn btn-default dropdown-toggle red" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> WebVR <span class="caret"></span></button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenu">
								<!-- <a href="src/webvr/RPIVRMap" class="dropdown-item">RPI VR Map</a> -->
								<!-- this needs to link to RPI VR Map component -->
								<router-link class="dropdown-item" to="/vr-map">RPI VR Map</router-link>
							</div>				
						</div>
					</li>
				</ul>
			</div>

		</nav>

		<!-- actual content -->
		<div class="container content">
			<router-view></router-view>
		</div>

		<!-- this needs to be fixed to the bottom -->
		<footer class="footer red fixed-bottom">
			<div class="container">
				<div class="row">
					<div class="col-md-2 col-xs-4">Other links</div>
					<div class="col-md-2 col-xs-4"><a href="https://rcos.io/">RCOS</a></div>
					<div class="col-md-2 col-xs-4"><a href="http://www.rpi.edu/">RPI Homepage</a></div>
				</div>
			</div>
			<div class="footer-copyright text-center fixed-bottom">
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
	a {
		color: white;
	}
	.red {
		background-color: #d7001a;
		color: white;
	}
	.navbar {
		position: absolute;
		left: 0;
		width: 100%;
		/*height: 60px;*/
	}
	.navbar-brand {
		color: white;
		font-size: 35px;
	}
	.nav-link {
		background-color: #d7001a; 
		color: white;
		font-size: 20px;
	}
	/* this doesn't work on phone because position changes*/
	/*.dropdown-menu {
		right: 0;
		left: auto;
	}*/
	.content {
		padding-top: 80px;
		padding-bottom: 80px;
		left: 0;
		bottom: 0;
		top: 0;
		height: 100%;
		width: 100%;
		position: absolute;
	}
	.footer {
		/*position: absolute;*/
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80px;
		padding-top: 10px;
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
				message: 'hello from App.vue',
			}
		}
	}
</script>
