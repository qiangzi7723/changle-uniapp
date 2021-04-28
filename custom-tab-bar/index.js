// 微信自定义的tabBar组件，仅在微信小程序生效
Component({
	data: {
		selected: 0,
		color: "#ACACAC",
		selectedColor: "#C8161C",
		list: [{
				"pagePath": "/pages/home/home",
				"iconPath": "/static/asset/img/home/tab_icon_zy_selected@2x.png",
				"selectedIconPath": "/static/asset/img/home/tab_icon_zy_selected@2x.png",
				"text": "主页"
			},
			{
				"pagePath": "/pages/index/index",
				"iconPath": "/static/asset/img/home/tab_icon_wd_normal@2x.png",
				"selectedIconPath": "/static/asset/img/home/tab_icon_wd_normal@2x.png",
				"text": "个人中心"
			}
		]
	},
	attached() {},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			wx.switchTab({
				url: url
			})
			this.setData({
				selected: data.index
			})
		}
	}
})
