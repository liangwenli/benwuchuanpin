// 主要内容
<template>
  <el-main>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </el-main>
</template>

<script>
import index from "./index.vue";
import sort from "./sort.vue";
import cart from "./cart.vue";
import center from "./center.vue";

export default {
  name: "appMain",
  props: ['currentComponent'],
  methods: {
    // 切换主要内容
    changeContent (indexName) {
      if (this.currentComponent != indexName) {
        this.currentComponent = indexName;
      }
    }
  },
  components: {
    index,
    cart,
    sort,
    center
  }
};
</script>
