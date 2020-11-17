import {getBannerList} from '../../axios'

const state ={
    getBannerList:[]
}

const getters = {
    getBannerList(state){
        return state.bannerList
    }
}

const mutations = {
    req_bannerlist(state,payload){
        state.bannerList = payload
    }
}



const actions={
        getBannerListAction({commit}){
            getBannerList({
                istree:true
            })
            .then(res=>{
                console.log(res,'lunbotu');
                if(res.data.code==200){
                    commit('req_bannerlist',res.data.list)
                }
            })
            .catch(err=>{
                console.log(error,'错误响应轮播');
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