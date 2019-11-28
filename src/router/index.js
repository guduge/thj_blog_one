import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/HomeCommend.vue'
import Catalog from '@/page/catalog/Catalog.vue'
import Me from '@/page/me/Me.vue'
import Detail from '@/page/detail/Detail.vue'

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
    {
        path: "/detail",
        name: "detail",
        component: Detail
    },

]
export default new Router({
	routes,
})
