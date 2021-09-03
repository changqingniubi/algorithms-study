<!--
 * @Description: 
 * @Author: changqing
 * @Date: 2021-09-03 14:52:22
 * @LastEditTime: 2021-09-03 16:45:45
 * @LastEditors: changqing
 * @Usage: 
-->
<template>
  <div class="chapter">
    <div class="left">
      <div
        :key="index"
        v-for="(item, index) in list"
        class="item"
        @click="handle(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "chapter1",
  data: function () {
    return {
      name: "chapter1",
      list: ["01-HelloWorld"],
    };
  },
  methods: {
    handle(item) {
      require(`@/examples/${this.name}/${item}.js`);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.chapter {
  height: 100%;
  display: flex;
  .left {
    width: 300px;
    overflow: scroll;
    height: 100%;
    .item {
      color: blue;
      cursor: pointer;
    }
  }
  .right {
    flex: 1;
    height: 100%;
  }
}
</style>
