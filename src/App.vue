<template>
		<el-container direction="vertical">
			<xHeader></xHeader>
			<el-container>
				<xAsideNav></xAsideNav>
				<xMainContent></xMainContent>
			</el-container>
			<xFooter></xFooter>
		</el-container>
</template>

<script>
	import xHeader from './views/Header.vue'
	import xAsideNav from './views/Side-Nav.vue'
	import xMainContent from './views/MainContent.vue'
	import xFooter from './views/Footer.vue'

	export default {
		components: {
			xHeader,
			xAsideNav,
			xMainContent,
			xFooter
		},
		data() {
			return {}
		}

	}
</script>

<style>
</style>
