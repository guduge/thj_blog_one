import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/HomeCommend.vue'
import Catalog from '@/page/catalog/Catalog.vue'
import Me from '@/page/me/Me.vue'
import Detail from '@/page/detail/Detail.vue'
import ElementTest from '@/page/elementtest/ElementTest.vue'
import ContainerTest from '@/page/elementtest/ContainerTest.vue'
import HomeHeaderView from "@/components/HomeHeaderView.vue";

Vue.use(Router)



const routes = [
	{
        path: '/',
        component: HomeHeaderView,
        children: [{
          path: '',
          name: 'home',
          component: Home
        }]
      },
      {
        path: '/home',
        component: HomeHeaderView,
        children: [{
          path: '',
          name: 'home',
          component: Home
        }]
      },
    {
        path: "/catalog",
        component: HomeHeaderView,
        children:[
            {
                path: '',
                name: 'catalog',
                component: Catalog
            }
        ]
    },
    {
        path: "/me",
        component: HomeHeaderView,
        children:[
            {
                path: '',
                name: 'me',
                component: Me
            }
        ]
    },
    {
        path: "/detail",
        component: HomeHeaderView,
        children:[
            {
                path: '',
                name: 'detail',
                component: Detail
            }
        ]
    },
    {
        path: "/test",
        name: "test",
        component: ElementTest
    },
    {
        path: "/container_test",
        name: "container_test",
        component: ContainerTest
    },

]
export default new Router({
    mode: 'history',
	routes,
})
