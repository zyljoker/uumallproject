<template>
  <div>
    <el-container>
      <el-header>逃离地球后台项目管理
         <div v-if='getUserInfo' class='userInfo'> 
           欢迎{{getUserInfo.username}}登录本系统
           <el-button type="danger" @click='logout' size='small'> 
          退出
          </el-button>
         </div>
      </el-header>

     

      <el-container>
        <el-aside width="200px">
          <v-nav></v-nav>
          
        </el-aside>
        <el-main>
            <!-- 二级路由出口 -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vNav from '../components/nav'
import{mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getUserInfo'])
  },

  components:{
      vNav
  },
    methods: {
      ...mapActions(['changeUserInfoAction']),

      logout(){
        this.changeUserInfoAction(null)
        // 退出之后强行跳转登录页
        this.$router.push('/login')
      }

    },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header 
  background: $twocolor;
  font-size 30px
  color #a5d296

.userInfo
  float right
  color #3f4040
  font-size 20px
  
</style>
