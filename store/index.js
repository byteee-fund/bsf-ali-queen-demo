import { reactive } from 'vue'

// 创建响应式状态
const state = reactive({
	selfieImgBase64: '',
	isJudge: false,
	loadComplete: false,
	selfieImgTemp: ''
})

// 创建actions
const actions = {
	setSelfieImgBase64(base64) {
		state.selfieImgBase64 = base64
	},
	setIsJudge(value) {
		state.isJudge = value
	},
	setLoadComplete(value) {
		state.loadComplete = value
	},
	setSelfieImgTemp(url) {
		state.selfieImgTemp = url
	}
}

// 创建store对象
const store = {
	state,
	dispatch(action, payload) {
		if (actions[action]) {
			actions[action](payload)
		}
	}
}

export default store 