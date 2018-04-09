<template>
	<div style="height:100%;">
		<view-box ref="viewBox">
			<router-view></router-view>
			<tabbar>
				<tabbar-item :selected="this.$route.path==='/'" :link="{path:'/'}">
					<img slot="icon" src="../../../assets/image/dm.jpg">
					<span slot="label">首页</span>
				</tabbar-item>
				<tabbar-item :selected="this.$route.path==='/home/list'" :link="{path:'/home/list'}">
					<img slot="icon" src="../../../assets/image/dm.jpg">
					<span slot="label">cp</span>
				</tabbar-item>
				<tabbar-item >
					<img slot="icon" src="../../../assets/image/dm.jpg">
					<span slot="label">发现</span>
				</tabbar-item>
				<tabbar-item >
					<img slot="icon" src="../../../assets/image/dm.jpg">
					<span slot="label">我的</span>
				</tabbar-item>
			</tabbar>
		</view-box>
	</div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import { Grid, GridItem, GroupTitle,Tabbar, TabbarItem,ViewBox,XHeader } from 'vux'

    export default {
        components: {
            Grid,
            GridItem,
            GroupTitle,
            Tabbar,
            TabbarItem,
            ViewBox,
            XHeader

        },
        methods: {
        }
    }
</script>

<style lang="less">
	@import '../../styles/reset.less';
	@import '../../styles/1px.less';
	@import '../../styles/tap.less';

	.weui-grid__icon{
		width: 36px!important;
		height: 36px!important;
	}
	.header{
		width: 100%;
		position: absolute!important;
		top: 0;
		z-index: 100;
	}
</style>
