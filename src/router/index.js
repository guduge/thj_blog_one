import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/HomeCommend.vue'
import Catalog from '@/page/catalog/Catalog.vue'
import Me from '@/page/me/Me.vue'

Vue.use(Router)



const routes = [
	{
        path: '/',
        name: 'home',
		component: Home
    },
    {
        path: '/home',
        name: 'home',
		component: Home
    },
    {
        path: "/catalog",
        name: "catalog",
        component: Catalog
    },
    {
        path: "/me",
        name: "me",
        component: Me
    },

]
export default new Router({
	routes,
})
