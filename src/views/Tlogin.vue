<template>
  <div class="home">
    <header class="head">
      <!-- <button><</button> -->
      <button class="b1" @click="cback()"><</button>
      <span id="logi">登录</span>
    </header>
    <!-- <section id="cont">
      <input type="text" placeholder="请输入用户名" class="userId" />
      <div></div>
      <input type="password" placeholder="请输入密码" class="password" />
      <button class="logg">立即登录</button>
    </section> -->

    <!-- 登录表单区域 ref="loginFormRef" 为实现重置 :rules="loginFormRules" 为实现校验-->

    <van-form
      @submit="onSubmit"
      class="Tl_form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginFormRules"
      label-width="0px"
    >
      <van-field prop="userId">
        <input type="text" placeholder="请输入用户名" class="userId" />
      </van-field>
      <van-field prop="password">
        <input type="password" placeholder="请输入密码" class="password" />
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="login"
          >立即登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        userId: 18893814004,
        password: -4412552624164300,
        organizationId:-4412552624164300,
        userGroupId: 3603180340264292
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        userId: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    cback() {
      this.$router.go(-1);
    },
    login() {
      // this.$refs.loginFormRef.validate(async valid => {
      //   if (!valid) return;
      //   const { data: res } = await this.$http.post("login", this.loginForm);
      //   if (res.meta.status !== 200) return this.$message.error("登录失败！");
      //   this.$message.success("登录成功");

      //   window.sessionStorage.setItem("token", res.data.token);

        //通过编程式导航跳转到主页，路由地址是 /home
         this.$router.push("/home");
      // });
    }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.html {
  .head {
    width: 100%;
    position: relative;
  }
}
#cont {
  width: 80%;
  margin: 50% auto;
  //   display: flex;
  //   align-content: center;
  position: relative;
}
.userId {
  /* 清除默认边框 */
  border: 0;
  outline: none;
  /*清除默认背景 */
  background-color: transparent;
  width: 100%;
  margin: 0 auto;
  border: 0px;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  padding: 5px;
}
.password {
  @extend .userId;
}
.logg {
  /* 清除默认边框 */
  border: 0;
  outline: none;
  /*清除默认背景 */
  background-color: transparent;
  width: 98%;
  height: 30px;
  margin-top: 20px;
  border-radius: 18px;
  background: #1989fa;
  position: absolute;
  left: 50%;
  margin-left: -48%;
}
.b1 {
  /* 清除默认边框 */
  border: 0;
  outline: none;
  /*清除默认背景 */
  background-color: transparent;
  font-size: 25px;
  padding: 7px;
}
#logi {
  display: block;
  width: 34px;
  position: absolute;
  top: 13px;
  left: 50%;
  margin-left: -17px;
}
.icon {
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 5px;
  right: 0;
}

.Tl_form {
  width: 80%;
  margin: 50% auto;
  //   display: flex;
  //   align-content: center;
  position: relative;
}
</style>
