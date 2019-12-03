import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import memberList from '../views/MainContent/Member/List/List.vue'
import memberLevel from '../views/MainContent/Member/Level.vue'
import addMember from '../views/MainContent/Member/List/AddMember.vue'
import editMember from '../views/MainContent/Member/List/updateMember.vue'

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
	},
	{
		path: '/member/editmember',
		name: 'EditMember',
		component: editMember
	}
	
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
