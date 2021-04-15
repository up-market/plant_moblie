<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header class="head">
      <!-- <button><</button> -->
      <!-- <button class="b1" @click="cback()"><</button> -->
      选择所属机构
    </header>
    <van-button type="danger" class="Hm_btn">北京浪辰科技第一医院</van-button>
    <!-- 自定义图标 -->
  
    <van-button type="danger" class="Hm_btn">北京浪辰科技第二医院</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  text-align: center;
  margin: 10px auto;
}
.Hm_btn {
  width: 90%;
  height: 50px;
  margin: auto 5%;
  margin-top: 20px;
}
</style>
