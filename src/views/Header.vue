<template>
	<el-header>header
		<el-button @click="test">test</el-button>
	</el-header>
</template>

<script>
	export default{
		methods:{
			test(){
				this.$store.commit('getMemberList')
			}
		}
	}
</script>

<style>
</style>
