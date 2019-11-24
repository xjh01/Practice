/* import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' */
import xAxios from '../components/xAxios.js'

// Vue.use(VueAxios, axios)

const mutations = {
	getMemberList(state,data){
		let relUrl = '/member_userinfo/list'
		xAxios.getAdd('POST',relUrl ,data)
		.then(response => {
			console.log(response)
			let tempdatastr = JSON.stringify(response.data.data.dataList);
			state.apiData = JSON.parse(tempdatastr)
			})
		.catch(error => {console.log(error)}) 
	},
	delMember(state,urlParams){
		let relUrl = '/member_userinfo/del'
		xAxios.del('get' , relUrl , urlParams)
		.then(response => {
			console.log(response,'删除成功')
			this.commit('getMemberList',{currentPage : 1})
		})
		.catch(error => {console.log(error)})
	}
}

export default mutations