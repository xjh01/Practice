<template>
	<el-container>
		<el-header>头部</el-header>
		<el-container>
			<el-aside>导航</el-aside>
			<el-main>
				主体
				<el-button @click='press'>获取服务器列表</el-button>
				
			</el-main>
		</el-container>
		<el-footer>脚步</el-footer>
	</el-container>
</template>

<script>
	import list from '../api/member.js'
	// import axios from 'axios'
	
	export default{
		data(){
			return{
				memberList:[],
				dataObj:{}
			}
		},
		methods:{
			press(){
				list.then(response => {
					console.log(response)
					this.dataObj =response.data
					console.log('dataObj:=', this.dataObj)
				})
				
				/* const listUrl = 'http://192.168.0.203:7777/member_userinfo/list';
				axios.post(listUrl,{currentPage:1})
				.then(response => {
					console.log(response)
					this.dataObj = response
					console.log(this.dataObj)
					console.log('memberlist:',this.dataObj.data.data.dataList)
				})
				.catch(error => {console.log(error)}) */
				
			}
		},
/* 		beforeMount() {
			const listUrl = 'http://192.168.0.203:7777/member_userinfo/list'
			axios({
				methods: 'post',
				url: listUrl,
				data:{
					currentPage: 1
				}
				
			}).then(response => {console.log(response)})
			.catch(error => {console.log(error)})
		} */
	}
</script>

<style>
</style>
