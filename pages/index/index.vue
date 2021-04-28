<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				 list: [{
				            "text": "对话",
				            "iconPath": "../../images/tabbar_icon_chat_default.png",
				          "selectedIconPath": "../../images/tabbar_icon_chat_active.png",
				            dot: true
				        },
				        {
				            "text": "设置",
				          "iconPath": "../../images/tabbar_icon_setting_default.png",
				          "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
				            badge: 'New'
				        }]
			}
		},
		onLoad() {
			console.log('index页面加载中')
			// uni.navigateTo({
			// 	url: "../home/home"
			// })
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
