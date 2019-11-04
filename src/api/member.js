import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios , axios);

const baseUrl = 'http://192.168.0.203:7777'

export default{
	
}

export function list(listData){
	let listUrl = baseUrl + '/member_userinfo/list';
	return Vue.axios.post(listUrl,listData)
		
	/* axios({
		method: 'post',
		url: accessUrl,
		data: {
			currentPage: 2
		}
	}).then(response => {console.log(response)})
	.catch(error => {console.log(error)}); */
}