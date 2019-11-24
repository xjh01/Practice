const state = {
	apiData:[],
	api:{
		baseUrl:'http://192.168.0.203:7777',
		member:{
			list:{
				relUrl: '/member_userinfo/list',
				method: 'post'
			},
			edit:{
				relUrl: '/member_userinfo/edit',
				method: 'post'
			},
			detail:{
				relUrl: '/member_userinfo/detail',
				method: 'get'
			},
			delet:{
				relUrl: '/member_userinfo/del',
				method: 'get'
			},
			changeStatus:{
				relUrl: '/member_userinfo/changeStatus',
				method: 'get'
			},
			add:{
				relUrl: '/member_userinfo/add',
				method: 'post'
			}
		}
		
	}
}

export default state