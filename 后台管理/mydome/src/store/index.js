import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


import menu from './modules/menu'
import role from './modules/role'
import user from './modules/user'
import specs from './modules/specs' 
import goods from './modules/goods'
import cate from './modules/cate'
import vip from './modules/vip'
import banner from './modules/banner'
import seck from './modules/seck'
//导出实例化的仓库
export default new Vuex.Store({
    state:{
        // userInfo:null
        //如果本地存储有值 把字符串数据转化成对象使用
        userInfo:sessionStorage.getItem('userInfo')? JSON.parse(sessionStorage.getItem('userInfo')):null
    },
    getters:{
            // 返回一个state的userInfo
            getUserInfo(state){
                return state.userInfo
            }
    },
    mutations:{
        CHANGE_USER(state,payload){
            state.userInfo= payload
            //如果这个payload有值 我们就存到本地存储否则就删除本地存储
            if(payload){
                sessionStorage.setItem('userInfo',JSON.stringify(payload))
            }else{
                sessionStorage.removeItem('userInfo')
            }
        }

    },
    actions:{
        //创建一个修改userInfoactions
        changeUserInfoAction({commit},payload){
            commit('CHANGE_USER',payload)
        }
    },

    modules:{
        menu,
        role,
        user,
        specs,
        goods,
        cate,
        vip,
        banner,
        seck
    }
})