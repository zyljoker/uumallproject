<template>
  <div>
    <el-container>
      <el-header>逃离地球后台项目管理</el-header>
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

export default {
  data() {
    return {};
  },
  methods: {},
  components:{
      vNav
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header 
  background: $twocolor;



</style>
