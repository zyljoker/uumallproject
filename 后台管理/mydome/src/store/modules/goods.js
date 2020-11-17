import { getGoodsList, getGoodsCount } from '../../axios'

const state = {
  goodsList: [],
  size: 2,
  page: 1,
  count: 0,
}

const getters = {
  getGoodsList() {
    return state.goodsList
  },
  getGoodsCount() {
    return state.count
  },
  getGoodsSize() {
    return state.size
  },
}

const mutations = {
  REQ_GOODSLIST(state, payload) {
    state.goodsList = payload
  },
  REQ_GOODSCOUNT(state, payload) {
    state.count = payload
  },
  REQ_PAGE(state, payload) {
    state.page = payload
  }
}

const actions = {
  getGoodsAction(context) {
    getGoodsList({
      size: context.state.size,
      page: context.state.page,
    })
      .then(res => {
        if (res.data.code == 200) {
          context.commit('REQ_GOODSLIST', res.data.list)
        }
      })
      .catch(err => {
        console.log(err);
      })
  },
  getGoodsCount({commit}) {
    getGoodsCount()
    .then(res => {
      if(res.data.code == 200){
        commit('REQ_GOODSCOUNT', res.data.list[0].total)
      }
    })
  },
  changePageAction(context, payload) {
    context.commit('REQ_PAGE', payload)
    context.dispatch('getGoodsAction')
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}