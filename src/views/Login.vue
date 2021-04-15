<template>
  <div class="Login">
    <div class="box">
      <div class="staff" @click="hm()">
        <div>
          <p class="s_p1">
            员工登录
          </p>

          <p>EMPLOYEES</p>
        </div>
      </div>
      <div>
        <div class="student" @click="hm()">
          <p class="s_p1">
            学生登录
          </p>
          <p>STYDENT</p>
        </div>
      </div>
      <div class="bottom">临床实习综合教学管理平台</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Toast } from "vant";
Vue.use(Icon);
Vue.use(Toast);

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "login",
  components: {
    // HelloWorld
  },
  methods: {
    hm() {
      this.$router.push("/Tlogin");
    }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  .staff {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    line-height: 20px;
    color: #fff;
    background-color: #379ef9;
    margin-top: 50px;
    font-size: 12px;
    padding: 5px;
    .s_p1 {
      margin-top: 48px;
      font-size: 15px;
    }
    p {
      // width: 10px;
      height: 10px;
      margin-top: 22px;
    }
  }
  .student {
    @extend .staff;
    background-color: #25c5d0;
  }
  .bottom {
    width: 156px;
    font-size: 13px;
    color: #25c5d0;
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -78px;
  }
}
</style>
