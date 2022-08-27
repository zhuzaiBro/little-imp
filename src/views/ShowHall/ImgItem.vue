<template>
  <div class="img-item-container">
    <div
      :style="{ backgroundImage: `url(${imgItem.bgImg})` }"
      class="blur-bg"
    ></div>
    <img class="bg" :src="imgItem.bgImg" alt="" />
    <img class="role" :src="imgItem.roleImg" alt="" />
    <div class="dec-container">
      <h3 class="title">{{ imgItem.title }}</h3>
      <p>{{ imgItem.info }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
let props = defineProps({
  imgItem: {
    type: Object,
    default: () => ({
      roleImg:
        "http://www.zhuzaibrother.cn/static/upload/2022-4-4-21-7-59-853-22140.png",
      bgImg:
        "http://www.zhuzaibrother.cn/static/upload/2022-2-13-13-35-18-264-96743.jpeg",
      title: "我的名字叫黄俊杰",
      info: "我也不知道要说些什么啊",
    }),
  },
});
onMounted(() => {});
</script>

<style lang="less" scoped>
@import "../../assets/styles/mixin.less";
.img-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 100%;
  border-radius: 1.2rem;
  .blur-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2vw);
  }
  .bg {
    width: 70%;
    height: 70%;
    transition: 0.6s;
    .self-center();
    transform-origin: bottom;
    transform: translate3d(-50%, -50%, -50%);
    z-index: 2;
  }
  .role {
    width: 45%;
    height: 60%;
    .self-center();
    z-index: 3;
  }
  .dec-container {
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    border-radius: 0.5rem;
    .title {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    position: absolute;
    bottom: -2rem;
    left: 2rem;
  }
}
</style>