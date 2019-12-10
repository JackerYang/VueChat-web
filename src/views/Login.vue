<template>
  <div class="login">
    <div class="main">
      <div class="title">VueChat</div>
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form ref="formLogin" :model="formLogin" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="username">
              <Input v-model="formLogin.username" placeholder="请输入用户名" />
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input type="password" password v-model="formLogin.password" placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
              <Button @click="handleReset('formLogin')" style="margin-left: 8px">重置</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="注册" name="register">
          <Form ref="formRegister" :model="formRegister" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="username">
              <Input v-model="formRegister.username" placeholder="请输入用户名" />
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input type="password" password v-model="formRegister.password" placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formRegister')">注册</Button>
              <Button @click="handleReset('formRegister')" style="margin-left: 8px">重置</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import { login, register } from "../api/api";
  import { setToken } from "../libs/token";

  export default {
    name: "Login",
    data() {
      return {
        formLogin: {
          username: "",
          password: ""
        },
        formRegister: {
          username: "",
          password: ""
        },
        ruleValidate: {
          username: [
            { required: true, message: "用户名不能为空", trigger: "change" }
          ],
          password: [
            { required: true, message: "密码不能为空", trigger: "change" }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            if (name === "formLogin") {
              // 登录
              login(this.formLogin).then(res => {
                if (res.data.status === 200) {
                  this.$Message.success(res.data.msg);
                  setToken(res.data.data);
                  this.$router.push({ name: "chat" });
                }
              });
            } else {
              // 注册
              register(this.formRegister).then(res => {
                if (res.data.status === 200) {
                  this.$Message.success(res.data.msg);
                }
              });
            }
          }
        });
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  };
</script>

<style lang="less">
  .login {
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    .main {
      width: 400px;
      height: 450px;
      padding: 50px 50px 30px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, .1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .title {
        font-size: 32px;
        text-align: center;
        margin-bottom: 40px;
      }
      .ivu-tabs {
        .ivu-tabs-bar {
          margin-bottom: 50px;
          .ivu-tabs-nav {
            width: 100%;
            .ivu-tabs-tab {
              text-align: center;
              margin: 0;
              width: 50%;
            }
          }
        }
      }
    }
  }
</style>