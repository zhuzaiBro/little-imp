<template>
  <!-- 先写pc端的样式 -->
  <div :style="{ height: '9rem', background: '#2b0f35' }"></div>
  <div
    :style="{
      backgroundImage: `url(${bac}) `,
    }"
    class="showhall-container"
  >
    <div v-if="isPC" class="left-list">
      <h2 class="right-title">IMP家族藏品</h2>
      <ul class="list-container">
        <li
          class="exhibit-item"
          v-for="(item, index) in menus"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="handleChangeSeries(index)"
        >
          <router-link :to="{ name: 'showhall' }">
            <span>{{ item.name }}</span>
            <Icon type="arrowRight" size="2" />
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right-show">
      <RightShow :isPC="isPC" />
    </div>
  </div>
</template>

<script setup>
import RightShow from "./RightShow.vue";
import { onUnmounted, onMounted, ref } from "vue";
import Icon from "../../components/Icon/index.vue";
import titleControl from "../../utils/titleControler";
import { getSeries } from "../../api/SeriesAndCard";
let props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});
const handleChangeSeries = (index) => {
  currentIndex.value = index;
};
let currentIndex = ref(0);
let bac = ref(
  "http://www.zhuzaibrother.cn/static/upload/2022-4-8-19-20-29-364-6b754.png"
);
let menus = ref([]);
getSeries().then((resp) => {
  // console.log(resp);
  menus.value = resp.datas;
  bac.value = resp.datas[0].imgUrl;
});
onMounted(() => {
  document.getElementById("app").style.height = "92.3vh";
  titleControl.setRouteTitle("展厅 | LITTLE IMP");
  document.body.style.overflow = "hidden";
  document.querySelector(".footer-container").style.display = "none";
});
onUnmounted(() => {
  document.body.style.overflow = "auto";
  document.getElementById("app").style.height = "auto";
  document.querySelector(".footer-container").style.display = "flex";
});
</script>

<style lang="less" scoped>
.showhall-container {
  // padding-top: 9rem;
  display: flex;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  color: #fff;
  .right-title {
    margin-top: -1rem;
    text-align: center;
    font-size: 2.4rem;
  }
  .left-list {
    flex-grow: 0;
    padding: 8rem 0;
    background: linear-gradient(#2b0f35, #0e0b16);
    width: 30rem;
    height: 100%;
    .exhibit-item {
      margin: 1.2rem 0;
      color: #f5f5f5;
      font-size: 1.8rem;
      width: 100%;
      height: 3.6rem;
      &.active {
        background: linear-gradient(
          120deg,
          rgb(241, 204, 209),
          rgb(243, 183, 247),
          rgb(159, 178, 247)
        );
        color: #202020;
        border-radius: 1.2rem;
      }
      &:hover {
        background: linear-gradient(
          120deg,
          rgb(241, 204, 209),
          rgb(243, 183, 247),
          rgb(159, 178, 247)
        );
        opacity: 0.7;
        border-radius: 1.2rem;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
  .right-show {
    width: 100%;
    flex-grow: 1;
    height: 100%;
  }
}
</style>

