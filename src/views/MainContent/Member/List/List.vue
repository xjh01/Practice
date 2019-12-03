<template>
	<div class="list">
		<el-row class="row1">
			<el-col :span="10" >
				<el-input placeholder="输入要查询的内容" suffix-icon="el-icon-search" style="width: 250px;" v-model="searchFilter"></el-input>
				<el-button type="primary" size="small" style="margin-left: 0.625rem;" @click="addMember">新增</el-button>
			</el-col>
		</el-row>
		<el-table :data="listdata.dataList" style="width: 100%;margin: 0 auto;" highlight-current-row border tooltip-effect="dark" :header-cell-style="tableHeaderColor" size="medium">
			<el-table-column type="index" width="50" header-align="center" align="center"></el-table-column>
			<el-table-column prop="user_name" label="姓名" header-align="center" align="center" sortable></el-table-column>
			<el-table-column prop="user_sex" label="性别" width="50" header-align="center" align="center"></el-table-column>
			<el-table-column prop="user_position" label="职位" header-align="center" align="center"></el-table-column>
			<el-table-column prop="money" label="工资" header-align="center" align="center" sortable></el-table-column>
			<el-table-column prop="user_phone" label="联系电话" width="120" header-align="center" align="center"></el-table-column>
			<el-table-column prop="user_addr" label="住址" header-align="center" align="center"></el-table-column>
			<el-table-column prop="user_idcard" label="身份证号" width="200" header-align="center" align="center"></el-table-column>
			<el-table-column label="操作" fixed="right" width="100" header-align="center" align="left">
				<template slot-scope="scope">
					<el-dialog title="详细信息" :visible.sync="dialogVisible" :append-to-body="true">
						<el-form :model="detail">
							<el-form-item label="姓名 :"><span>{{detail.name}}</span></el-form-item>
							<el-form-item label="性别 :"><span>{{detail.sex}}</span></el-form-item>
							<el-form-item label="身份证号 :"><span>{{detail.idcard}}</span></el-form-item>
						</el-form>
						<span slot="footer" class="dialog-footer" >
							<el-button type="primary" @click="dialogVisible=false">确定</el-button>
						</span>
					</el-dialog>
					<el-tooltip content="详情" placement="top">
						<i class="icon el-icon-document" @click="showDetail(scope.row)"></i>
					</el-tooltip>
					<el-tooltip content="编辑" placement="top">
						<i class="icon el-icon-edit-outline" @click="editMember(scope.row)"></i>
					</el-tooltip>
					<el-tooltip content="删除" placement="top">
						<i class="icon el-icon-delete" @click="delMember(scope.row.id)"></i>
					</el-tooltip>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background :page-size="listdata.limit" :pager-count="7" layout="-> ,total , prev, pager, next ,jumper" :total="listdata.total" :current-page.sync="currentPage" @current-change="handleCurrentChange(currentPage)"></el-pagination>
		<el-button @click="test">测试</el-button>
	</div>
</template>

<script>
	// import {mapState} from 'vuex'
	import xAxios from '../../../../components/xAxios.js'
	
	export default {
		data() {
			return {
				id: null,
				listdata: {},
				currentPage: null,
				searchFilter:'',
				dialogVisible: false,
				detail:{
					name:'',
					sex:'',
					idcard:''
				},
				searchData:{
					currentPage : 1,
					limit: 10
				}
			}
		},
		methods: {
			test(){
				let data = {
					user_name: 'x2',
					user_sex: '男',
					user_birth: '1999-01-01',
					user_idcard: '520103198401155672',
					user_phone: '13984818327',
					user_landline: ''
				}
				xAxios('POST','/member_userinfo/add', data )
				.then(response => {console.log(response)})
				.catch(error => {console.log(error)})
			},
			showDetail(row){
				this.detail.name = row.user_name
				this.detail.sex = row.user_sex
				this.detail.idcard = row.user_idcard
				this.dialogVisible = true
			},
			
			// 修改table header的背景色
			tableHeaderColor({rowIndex}){
				if (rowIndex === 0) {
					return 'background-color: lightblue;color: #fff;font-weight: 500;'
				}
			},
			handleCurrentChange(page){
				this.searchData.currentPage = page
				this.getMemberList()
			},
			getMemberList(){
				xAxios('POST','/member_userinfo/list', this.searchData)
				.then(response => {
					// response.data.data.dataList.forEach(dataItem => this.datalist.push(dataItem))
					/* //成功转换获取
					let list = JSON.stringify(response.data.data.dataList) 
					this.datalist = JSON.parse(list) */
					console.log(response.data.data)
					this.listdata = response.data.data
				})
				.catch(error => console.log(error))
				// this.$store.commit('getMemberList',{currentPage:1})
			},
			addMember(){
				this.$router.push('/member/addmember')
			},
			editMember(userInfo){
				console.log(userInfo)
				this.$router.push({name: 'EditMember', params:{userInfo:userInfo}})
			},
			delMember(id){
				this.$confirm('确定要删除该条记录吗？','确认删除',{
					confirmButtonText : '确定',
					cancelButtonText : '取消'
				})
				.then(() => {
					xAxios('get', '/member_userinfo/del', undefined ,{id:id})
					this.$message({
						type: 'success',
						message: '记录已删除'
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消了删除'
					})
				})
			}
		},
		filters:{
			
		},
		beforeMount() {
			this.getMemberList()
		}
	}
</script>

<style>
	.list{
		margin: 0 auto;
		width: 80%;
	}
	
	.row1{
		margin-top: 0.3125rem;
		margin-bottom: 0.625rem;
		padding-left: 0.625rem;
	}
	
	.icon{
		margin-left: 0.625rem;
	}
	
</style>
