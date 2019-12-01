import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios , axios);

const base = 'http://192.168.0.203:7777';
/* 
const xAxios = {
	getAdd(way , relUrl , info ){
		return (Vue.axios({
			url: relUrl,
			method: way,
			baseURL: base,
			// `headers` 是即将被发送的自定义请求头
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			data: info,
			timeout: 3000,
			responseType: 'json',
			responseEncoding: 'utf8',
			// `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
			validateStatus: function (status) {
				return status >= 200 && status < 300; // default
			},
		}))
	},
	
	del(way , relUrl , urlParams){
		return (Vue.axios({
			url: relUrl,
			method: way,
			baseURL: base,
			// `headers` 是即将被发送的自定义请求头
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			params:urlParams,
			timeout: 3000,
			responseType: 'json',
			responseEncoding: 'utf8',
			// `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
			validateStatus: function (status) {
				return status >= 200 && status < 300; // default
			},
		}))
	},
	 */
export default function xAxios(method , url , data , params){
		return (Vue.axios({
			url: url,
			method: method,
			baseURL: base,
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			data: data,
			params: params,
			timeout: 3000,
			responseType: 'json',
			responseEncoding: 'utf8',
			validateStatus: (status) => {
				return status >= 200 && status < 300;
			}
		}));
	}

// export {xAxios}
// export default xAxios