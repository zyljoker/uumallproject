<template>
  <div>
    <el-table :data="menuList" stripe style="width: 100%" row-key="id" default-expand-all :tree-props="{children: 'children'}">>
      <el-table-column prop="id" label="菜单编号" width="180"> </el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180"> </el-table-column>
      <el-table-column prop="pid" label="上级菜单"> </el-table-column>
      <el-table-column prop="icon" label="菜单图标" width="180"> </el-table-column>
      <el-table-column prop="url" label="菜单地址" width="180"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column  label="操作"> 
          <template slot-scope='item'>

              <div>
                
                  <el-button type="primary" size='small' @click="edit(item.row.id)">编辑</el-button>
                   <el-button type="danger" size="small" @click="del(item.row.id)">删除</el-button>
              </div>

          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapGetters,getMenuListAction, mapActions} from 'vuex'
import {getMenuDelete} from '../../axios'
export default {
  data() {
    return {
       
    };
  },
  mounted() {
      this.getMenuList()
  },
  methods: {
      ...mapActions({
          getMenuList:'menu/getMenuListAction'
      }),

      del(id){
        this.$confirm('确定要删除这条数据嘛, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          getMenuDelete({id})
          .then(res=>{
           if(res.data.code==200){
             this.$message.success(res.data.msg)

             this.getMenuList()
           }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

      edit(id){
          //  把id 传给父组件menu  给弹框使用
        this.$emit('edit',id)
      }
  },
  computed: {
    ...mapGetters({
        menuList:'menu/getMenuList'
    })
  },
};
</script>

<style lang="" scoped>
</style>
