<template>
	<div class="container-fluid">
		<!-- header, which should be at the top of every page -->
		<!-- It should probably become a drop down menu on mobile devices,
		but I still need to figure out how to see the VR programs -->
		<nav class="navbar navbar-expand-md sticky-top red">
			<!-- <div class="container-fluid"> -->
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
				</ul>
			</div>
			<!-- </div> -->
			
			<!-- WebVR programs menu -->
			<div class="dropdown">
				<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> WebVR <span class="caret"></span></button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu">
					<li><a href="#">please work</a></li>
					<li><a href="src/webvr/RPIVRMap">RPI VR Map</a></li>
					<li role="separator" class="divider"></li>
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
				Other links
			</div>
			<div class="footer-copyright fixed-bottom">
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
	.content {
		padding-top: 80px;
		/*padding-bottom: 60px;*/
		left: 0;
		height: 100%;
		position: absolute;
	}
	.footer {
		position: absolute;
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
