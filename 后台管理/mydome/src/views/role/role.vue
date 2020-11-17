<template>
  <div>
    <!-- 面包屑 -->
    <v-elbread></v-elbread>
    <!-- 添加按钮 -->
    <el-button type="primary" plain size="mini" @click='add'>添加</el-button>
  <!-- 列表渲染 -->
    <v-table  @edit='edit'></v-table>
  <!-- 弹框 -->
    <v-dialog :addInfo='addInfo' ref="dialog"  @cancel='cancel'></v-dialog>

  </div>
</template>

<script>
import vElbread from "../../components/el-brend";
import vTable from "./list";
import vDialog from "./add";
export default {
  data() {
    return {
      addInfo:{
        isShow:false,
        isAdd:true//添加还是编辑
      }
    };
  },
  methods: {
    //点击添加打开弹框
    add() {
      this.addInfo.isShow = true;
      //点击添加的时候，告诉弹框你是添加
      this.addInfo.isAdd = true;
    },
    cancel(){
      this.addInfo.isShow =false
    },
    edit(id){
      this.addInfo.isShow= true
      this.addInfo.isAdd=false
      this.$refs.dialog.look(id)
    }
   
  },
  components: {
    vElbread,
    vTable,
    vDialog
  }
};
</script>

<style lang="" scoped>
</style>