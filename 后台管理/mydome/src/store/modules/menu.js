//引入盛装好的借口
import {getMenuList} from '../../axios'

// state
const state = {
    menuList:[]
}
// getters
const getters = {
    //封装了一个state中菜单列表
    getMenuList(state){
        return state.menuList
    }
}

//mutations
//
const mutations={
    //去修改state中菜单列表
    req_menulist(state,payLoad){
        state.menuList = payLoad
    }
}
//actions
const actions ={
    //获取菜单列表
    getMenuListAction({commit}){
        getMenuList(
            {istree:true}
        )
        .then(res=>{
            console.log(res,'响应');
            if(res.data.code==200){
                //提交一个mutation以及携带参数
                commit('req_menulist',res.data.list)
            }
        })
        .catch(err=>{
            console.log(err,'失败');
        })
    }
}


export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced:true
}