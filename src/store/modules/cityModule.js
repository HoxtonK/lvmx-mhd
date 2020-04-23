// 拆分出来的 城市相关的 仓库子模块

const state = {
  curCity: null // 当前选择的城市 { cityId: 1111, name: 北京 }
}

const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.curCity = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
