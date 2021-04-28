class Request {
	constructor(arg) {
		this.header = {
			'custom-header': 'hello' //自定义请求头信息
		}
		// 接口地址
		this.host = "https://www.fastmock.site/mock/28066165eb9d0b069ef683260366cc4f/cl"
	}

	ping() {
		console.log("ping")
	}

	async _requestCb(fn) {
		const response = await fn();
		if (response.data.code != "0") {
			console.log("接口状态异常");
		}
		if (response.data.code == "503") {}
		return response.data;
	}


	async post(...params) {
		const response = await axios.post(...params);
		return this._requestCb(response);
	}

	async get(...params) {
		let qs = "";
		let url = params[0];

		if (params[1] != null) {
			// 说明传入了GET参数
			// 暂不兼容递归对象的参数
			for (const key in params[1]) {
				const value = params[1][key];
				if (qs.length > 0) qs += "&";
				qs += key + "=" + value;
			}
		}
		if (qs.length > 0) {
			url += "?" + qs;
		}

		// 发起请求
		const response = () => {
			return new Promise(resovle => {
				uni.request({
					method: 'GET',
					url: this.host + url,
					header: {
						...this.header
					},
					data: {

					},
					success: (res) => {
						resovle(res)
					}
				})
			})
		}

		return this._requestCb(response);
	}

}

const request = new Request();
export default request;
