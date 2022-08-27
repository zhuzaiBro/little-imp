<template>
  <ul
    id="right-exhibit-container"
    class="right-exhibit-container"
    :class="{ mobileExhibit: !isPC }"
  >
    <li
      :id="`item${index}`"
      v-for="(item, index) in exhibitList"
      :key="index"
      :imgItem="item"
    >
      <img-item :imgItem="item" />
    </li>
    <div :style="{ height: '75vh' }"></div>
  </ul>
</template>

<script setup>
import ImgItem from "./ImgItem.vue";
import { computed, onMounted, ref, watch } from "vue";
import { getCard } from "../../api/SeriesAndCard";
let props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});
let exhibitList = ref([]);
// 传递数据
getCard().then((resp) => {
  // exhibitList.value =
  exhibitList.value = resp.datas;
});

let rightContainer;
let posArr = [];
let pageHeight;
watch(exhibitList, () => {
  for (const i in exhibitList.value) {
    posArr.push(i * pageHeight + pageHeight);
  }
  // console.log(posArr);
});
onMounted(() => {
  pageHeight = window.innerHeight - 200; // 理想情况下每一张纸的高度
  if (!props.isPC) {
    pageHeight = window.innerHeight * 0.3 - 100;
  }
  // 计算出每张纸片顶部的位置,返回一个数组
  // console.log(pageHeight);

  rightContainer = document.getElementById("right-exhibit-container");
  let page,
    initHeight = 100;
  rightContainer.addEventListener("scroll", () => {
    // 根据滚动条高度抓取page
    for (let i = 0; i < posArr.length; i++) {
      if (rightContainer.scrollTop - posArr[i] <= 0) {
        page = document.getElementById(`item${i}`);
        break;
      }
    }
    if (!page) return;
    // console.log(page.getClientRects()[0], rightContainer.scrollTop);
    // 当top小于10的时候就做旋转
    if (page.getClientRects()[0].top <= initHeight) {
      const bg = page.querySelector(".img-item-container").querySelector(".bg");

      bg.style.transform = "translate(-50%, -50%) rotate3d(1, 0, 0, -60deg)";
    } else {
      const bg = page.querySelector(".img-item-container").querySelector(".bg");
      bg.style.transform = "translate(-50%, -50%)";
    }
  });
});
</script>

<style lang="less" scoped>
.right-exhibit-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &.mobileExhibit {
    li {
      height: 30vh;
      width: 70vw;
    }
  }
  li {
    margin: 12.5vh auto;
    height: 75vh;
    width: 80%;
  }
}
</style>