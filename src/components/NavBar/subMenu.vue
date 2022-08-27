<template>
  <ul class="menu-list">
    <li class="submenu" v-for="(item, index) in menuList" :key="index">
      <a :href="item.url" target="_blank">
        {{ item.content }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { defineComponent, defineProps } from "vue";
const props = defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
@import "../../assets/styles/var.less";
.menu-list {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: @base-color;
  .submenu {
    list-style: none;
    width: 100%;
    text-align: center;
    border-bottom: 0.15rem solid #ccc;
    &:last-child {
      border-bottom: none;
    }
    a {
      color: inherit;
      padding: 0 1rem;
      text-decoration: none;
    }
  }
}
</style>