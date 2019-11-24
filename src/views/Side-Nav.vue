<template>
	<el-aside style="width: 200px;">
		<el-menu :unique-opened="true" :router="true" v-for="(navitems,index) in nav" :key="index">
			<el-menu-item index="/">首页</el-menu-item>
			<el-submenu :index="navitems.navRoute">
				<template slot="title">
					{{navitems.title}}
				</template>
				<el-menu-item v-for="item in navitems.items" :key="item.itemTitle" :index="item.itemRoute">
					{{item.itemTitle}}
				</el-menu-item>
			</el-submenu>
			
		</el-menu>
	</el-aside>
</template>

<script>
	export default{
		data(){
			return{
				nav:[
					{
						title: '会员管理',
						navRoute: '/member',
						items:[
							{
								itemTitle: '会员列表',
								itemRoute: '/member/list'
							},
							{
								itemTitle: '会员级别',
								itemRoute: '/member/level'
							},
							{
								itemTitle: '会员权益',
								itemRoute: '/member/rights'
							},
							{
								itemTitle: '积分规则',
								itemRoute: '/member/rewardrules'
							}
						]
					}
				]
			}
		}
	}
</script>

<style>
</style>
