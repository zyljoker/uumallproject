<template>
  <div>
    <!-- 面包屑 -->
    <v-bread></v-bread>
    <!-- 添加按钮 -->
    <el-button type="primary" plain size="small" @click="isAdd">添加</el-button>
    <!-- 列表渲染 -->
    <v-table @edit="edit"></v-table>
    <!-- 弹出框 -->
    <v-dialog ref="dialog" @cancel='cancel' :addInfo='addInfo'></v-dialog>
  </div>
</template>

<script>
import vBread from '../../components/el-brend'
import vTable from './list'
import vDialog from './add'

export default {
  data() {
    return {
      addInfo: {
        isShow: false,
        isAdd: true,
      }
    }
  },
  components: {
    vBread,
    vTable,
    vDialog,
  },
  methods: {
    isAdd(){
      this.addInfo.isShow= true
      this.addInfo.isAdd = true
    },
    cancel(e){
      this.addInfo.isShow=e
    },
    edit(e){
      this.addInfo.isAdd = false
      this.addInfo.isShow= true
      this.$refs.dialog.look(e)
    }
  },
};
</script>

<style lang="stylus" scoped>
.el-button {
  margin: 20px 0;
}
</style>