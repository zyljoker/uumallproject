<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="logfrom"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getUserLogin } from '../axios'
export default {
  data() {
    return {
      //表单输入参
      loginForm: {
        username: "",
        password: ""
      },
      //规则验证
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    login(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          //登录逻辑

          //调取登录接口
          getUserLogin(this.loginForm)
          .then(res=>{
            if(res.data.code==200){
              this.$message.success(res.data.msg)
              //登录成功之后，把登录数据存储到本地存储中
              sessionStorage.setItem('userInfo',JSON.stringify(res.data.list))
              //跳转
              this.$router.push('/home')
            }else{
              this.$message.error(res.data.msg)
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.login 
  width: 100vw;
  height: 100vh;
  background: $onecolor;

  .logfrom 
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -150px;
    width: 400px;
    height: 220px;
    padding: 35px 10px;
    background: $fourcolor;
  

</style>
