//引入角色接口
import {getMemberList} from "../../axios";

const state ={
    memberList:[]
}



const getters={
    getMemberList(state){
        return state.memberList
    }
}

const mutations={

}

const actions = {
    getMemberActions({commit}){
        getMemberList()
        .then(res=>{
            console.log(res,'lol');
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced: true
}