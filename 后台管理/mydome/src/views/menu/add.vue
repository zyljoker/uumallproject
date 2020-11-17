<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd? '添加菜单':'编辑菜单'"
      :visible.sync="addInfo.isShow"
      center
      :before-close="cancel"
    >
      <el-form :model="form" :rules="rules" ref="formDialog">
        <el-form-item
          prop="title"
          label="菜单名称"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="pid" label="上级菜单" :label-width="formLabelWidth">
          <el-select
            v-model="form.pid"
            @change="changemenu"
            placeholder="请选择"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in menuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.type" autocomplete="off"></el-input> -->
          <el-radio v-model="form.type" :label="1" disabled="">目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled="">菜单</el-radio>
        </el-form-item>

        <el-form-item
          label="菜单图标"
          :label-width="formLabelWidth"
          v-if="form.type == 1"
        >
          <el-select v-model="form.icon" placeholder="请选择">
            <el-option
              v-for="item in iconList"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
          <!-- <el-input v-model="form.url" autocomplete="off"></el-input> -->
          <el-select v-model="form.url" placeholder="请选择">
            <el-option
              v-for="item in indexRoutes"
              :key="item.path"
              :label="item.name"
              :value="item.path"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.status" autocomplete="off"></el-input> -->
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button v-if="addInfo.isAdd" @click="add('formDialog')">添加</el-button>
        <el-button v-else @click="update('formDialog')">编辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getMenuAdd,getMenuInfo,getMenuEdit} from "../../axios";
import { mapActions, mapGetters } from "vuex";

import { indexRoutes } from "../../router";
export default {
  props: ["addInfo"],
  data() {
    return {
      form: {
        name: "",
        pid: 0,
        icon: "",
        type: 1,
        url: "",
        status: 1
      },

      rules: {
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pid: [{ required: true, message: "请选择上级菜单", trigger: "blur" }]
      },
      //   isShow: true,
      formLabelWidth: "120px",
      indexRoutes: indexRoutes,
      iconList: ["el-icon-eleme", "el-icon-s-tools", "el-icon-user-solid"]
    };
  },
  computed: {
    //获取菜单列表的至
    
    ...mapGetters({ menuList: "menu/getMenuList" })
  },

  methods: {
    reset() {
      this.form = {
        name: "",
        pid: 0,
        icon: "",
        type: 1,
        url: "",
        status: 1
      };
    },
  
    ...mapActions({
      getMenuList: "menu/getMenuListAction"
    }),
    cancel() {
      this.$emit("cancel", false);
      this.reset();
    },
    look(id){
      console.log(id,'形参');
      //查看列表
      getMenuInfo({id})
      .then(res=>{
        // console.log(res,'一条数据');
        if(res.data.code===200){
          this.form=res.data.list
          this.from.id = id
        }else{
          this.$message.error(res.data.msg)
        }
        
      })
    },
    update(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          //修改逻辑

          //调去修改接口
          getMenuEdit(this.form)
            .then(res => {
              console.log(res, "修改成功");
              if (res.data.code == 200) {
                this.$message.success(res.data.msg);
                this.cancel();
                this.getMenuList();
              } else {
                this.$message.error(res.data.msg);
              }
            })
            .catch(err => {
              console.log(err, "失败");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    add(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          //登录逻辑

          //调取登录接口
          getMenuAdd(this.form)
            .then(res => {
              console.log(res, "响应成功");
              if (res.data.code == 200) {
                this.$message.success(res.data.msg);
                this.cancel();
                this.getMenuList();
              } else {
                this.$message.error(res.data.msg);
              }
            })
            .catch(err => {
              console.log(err, "失败");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changemenu() {
      console.log(this.form.pid, "pid");
      if (this.form.pid === 0) {
        // console.log(this.form.pid,'pid');
        this.form.type = 1;
      } else {
        this.form.type = 2;
      }
    }
  }
};
</script>

<style lang="" scoped>
</style>
