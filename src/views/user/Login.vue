<template>
  <div>
    <el-card class="card">
      <span>登录</span>
      <el-form :model="loginForm" :rules="rules">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    </el-card>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName:[{required:true,messsage:'用户名不能为空',trigger:'blur'}],
        password:[{required:true,messsage:'密码不能为空',trigger:'blur'}]
      }
    }
  },


  methods: {
    //新增
    login() {
      if(this.loginForm.userName === 'admin' && this.loginForm.password === '123456') {
        this.$router.push({
          path: '/index'
        })
      } else {
        this.$message.error('用户用或密码输入错误')
      }
    }
  }
}
</script>

<style>
.card {
  width: 400px;
  margin: 180px 450px;
}
</style>