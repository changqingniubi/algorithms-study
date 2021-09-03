<!--
 * @Description: 
 * @Author: changqing
 * @Date: 2021-09-03 14:52:22
 * @LastEditTime: 2021-09-03 16:46:44
 * @LastEditors: changqing
 * @Usage: 
-->
<template>
  <div id="nav">
    <router-link to="/">Algorithms</router-link>
  </div>
  <div id="body">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#body {
  flex: 1;
}
</style>
