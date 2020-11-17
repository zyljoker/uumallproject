<template>
  <div>
    <!-- 面包屑 -->
    <v-elbread></v-elbread>
    <!-- 添加按钮 -->
    <el-button type="primary" size='small' @click='isAdd'>添加</el-button>
    <!-- 列表渲染 -->
    <v-table @edit='edit'></v-table>
    <!-- 弹窗表单 -->
    <v-add ref="dialog" @cancel='cancel' :addInfo='addInfo'></v-add>
  </div>
</template>

<script>
import vElbread from '../../components/el-brend'
import vTable from './list'
import vAdd from './add'

export default {
  data() {
    return {
      addInfo:{
        isShow:false,
        isAdd:true
      }
        
    };
  },
  methods: {
      isAdd(){
          this.addInfo.isShow=true
          this.addInfo.isAdd= true
      },
      cancel(e){
          this.addInfo.isShow = e
      },
      edit(e){
        // e是表格传递的id
         this.addInfo.isShow = true
         this.addInfo.isAdd=false

        //  console.log(this.$refs.dislog);
        this.$refs.dialog.look(e)
      }
  },
  components:{
      vElbread,
      vTable,
      vAdd
  }
};
</script>

<style lang="stylus" scoped>
.el-button
    margin 20px 0 0 20px
</style>
