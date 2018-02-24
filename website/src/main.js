import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

console.log("I am working!!!!! sort of")

Vue.use(VueRouter);

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
	routes: routes
});

var app = new Vue({
	router: router,
	components: { App },
	template: '<App/>'
}).$mount("#app")
