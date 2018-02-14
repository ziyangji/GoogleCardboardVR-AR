import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

console.log("I am working!!!!! sort of")

Vue.use(VueRouter);

var app = new Vue({
	el: '#app',
	router: router,
	components: { App },
	template: '<App/>',
	data: {
		msg: "look at me (vue is working)"
	}
})

// I need to somehow use the routes from my express app
const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About }
// 	{ path: '/contact', component: Contact }
];

const router = new VueRouter({
	mode: 'history',
	routes: routes
});
