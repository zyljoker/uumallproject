// 引入封装好的接口
import { getSeckList } from '../../axios';

const state = {
  seckList: [],
}

const getters = {
  getSeckList(state) {
    return state.seckList
  }
}

const mutations = {
  REQ_SECKLIST(state, pauload) {
    state.seckList = pauload;
  }
}

const actions = {
  getSeckListAction({ commit }) {
    getSeckList()
      .then(res => {
        if (res.data.code === 200) {
          if (!res.data.list) {
            res.data.list = []
          }
          commit('REQ_SECKLIST', res.data.list)
        }
      })
      .catch(err => {
        console.log(err, '失败');
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}