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