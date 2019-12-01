<template>
	<el-row style="width: 80%;margin: 0 auto;">
		<el-col>
			<el-form ref="userForm" :model="userForm" label-width="100px" :rules="rules">
				<el-form-item label="姓名 : " prop="user_name">
					<el-input v-model="userForm.user_name" placeholder="输入姓名" class="username"></el-input>
				</el-form-item>
				<el-form-item label="性别 : " prop="user_sex">
					<el-radio-group v-model="userForm.user_sex">
						<el-radio label="男"></el-radio>
						<el-radio label="女"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="出生年月 : " prop="user_birth">
					<el-date-picker v-model="userForm.user_birth" type="date" placeholder="选择日期" format="yyyy年MM月dd日" value-format="yyyy-MM-dd" @change="changeAge(userForm.user_birth)"></el-date-picker>
					<span> 年龄 ：{{age}} 岁</span>
				</el-form-item>
				<el-form-item label="身份证号 : " prop="user_idcard">
					<el-input v-model="userForm.user_idcard" class="idcard" placeholder="输入身份证号"></el-input>
				</el-form-item>
				<el-form-item label="手机号 : " prop="user_phone">
					<el-input v-model="userForm.user_phone" class="phone" placeholder="输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="座机 : ">
					<el-input v-model="userForm.user_landline" class="landline"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submit(userForm)">提交</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
	import {jsGetAge} from '../../../../components/getAge.js'
	import xAxios from '../../../../components/xAxios.js'
	// import axios from 'axios'

	export default {
		data() {
			return {
				age: null,
				userForm: {
					user_name: '',
					user_sex: '男',
					user_birth: '',
					user_idcard: '',
					user_phone: '',
					user_landline: ''
				},
				rules: {
					user_name: [{
						required: true,
						message: '名字为必填项',
						trigger: blur
					}],
					user_birth: [{
						required: true,
						message: '必须选择一个出生日期',
						trigger: blur
					}],
					user_idcard: [{
						required: true,
						message: '身份证号为必填项',
						trigger: blur
					}],
					user_phone: [{
						required: true,
						message: '手机号为必填项',
						trigger: blur
					},{
						min:1,
						message: '手机号不正确，请检查',
						trigger: blur
					}]
				}
			}
		},
		methods: {
			changeAge(birthday) {
				let tempage = jsGetAge(birthday)
				this.age = tempage
			},
			submit(userForm){
				this.$refs.userForm.validate( valid => {
					if(valid){
						xAxios('post','/member_userinfo/add',userForm)
						.then(response => {console.log(response)})
						.catch(error => {console.log(error)})
					}else{
						return false
					}
				})
			}
		},
		computed: {

		}

	}
</script>

<style>
	.username {
		max-width: 7.5rem;
		width: 7.5rem;
	}

	.idcard {
		max-width: 12.5rem;
		width: 12.5rem;
	}

	.phone {
		max-width: 7.5rem;
		width: 7.5rem;
	}

	.landline {
		max-width: 7.5rem;
		width: 7.5rem;
	}
</style>
