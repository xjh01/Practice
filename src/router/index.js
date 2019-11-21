import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import memberList from '../views/MainContent/Member/List/List.vue'
import memberLevel from '../views/MainContent/Member/Level.vue'
import addMember from '../views/MainContent/Member/List/AddMember.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/member/list',
		component: memberList
	},
	{
		path: '/member/level',
		component: memberLevel
	},
	{
		path: '/member/addmember',
		component: addMember
	}

	// {
	// 	path: '/member',
	// 	name: 'member',
	// 	children: [{
	// 			path: 'list',
	// 			component: memberList
	// 		},
	// 		{
	// 			path: 'level',
	// 			component: memberLevel
	// 		}
	// 	]
	// }
]



const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//在使用Element UI 时点击同一个路由，控制台报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
};

export default router
