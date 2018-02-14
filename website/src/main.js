import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App.vue';

// Vue.use(VueRouter);

var app = new Vue({
	el: '#app',
	// router,
	// components: { App },
	data: {
		msg: "look at me (vue is working)"
	}
})

// // I need to somehow use the routes from my express app
// const routes = [
// 	{ path: '/about', component: About },
// 	{ path: '/contact', component: Contact }
// ];

// const router = new VueRouter({
// 	routes
// });
