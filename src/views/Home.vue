<!--
 * @Description: 
 * @Author: changqing
 * @Date: 2021-09-03 14:52:22
 * @LastEditTime: 2021-09-03 16:52:26
 * @LastEditors: changqing
 * @Usage: 
-->
<template>
  <div class="home">
    <div class="nav">
      <router-link to="chapter1" class="mdl-layout__tab">01</router-link>
      <router-link to="chapter3" class="mdl-layout__tab">03</router-link>
      <router-link to="chapter4" class="mdl-layout__tab">04</router-link>
      <router-link to="chapter5" class="mdl-layout__tab">05</router-link>
      <router-link to="chapter6" class="mdl-layout__tab">06</router-link>
      <router-link to="chapter7" class="mdl-layout__tab">07</router-link>
      <router-link to="chapter8" class="mdl-layout__tab">08</router-link>
      <router-link to="chapter9" class="mdl-layout__tab">09</router-link>
      <router-link to="chapter10" class="mdl-layout__tab">10</router-link>
      <router-link to="chapter11" class="mdl-layout__tab">11</router-link>
      <router-link to="chapter12" class="mdl-layout__tab">12</router-link>
      <router-link to="chapter13" class="mdl-layout__tab">13</router-link>
      <router-link to="chapter14" class="mdl-layout__tab">14</router-link>
      <router-link to="chapter15" class="mdl-layout__tab">15</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {},
});
</script>
<style lang="less">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .nav {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .mdl-layout__tab {
      color: blue;
      margin: 0 5px;
      &:hover {
        color: aqua;
      }
    }
  }
  .content {
    flex: 1;
  }
}
</style>
