import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

console.log("I am working!!!!! sort of")
console.log(location.pathname);

Vue.use(VueRouter);

// I need to somehow use the routes from my express app
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	}
];

const router = new VueRouter({
	mode: 'history',
	// base: __dirname,
	routes: routes
});

var app = new Vue({
	router: router,
	components: { App },
	template: '<App/>'
}).$mount("#app")
