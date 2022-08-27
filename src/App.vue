<template>
  <Layout>
    <template #top>
      <NavBar :style="{ paddingTop: '3rem' }" :isPC="isPC" />
      <!-- 垫片 -->
    </template>
    <template #main>
      <!-- <div :style="{ height: '6rem' }"></div> -->
      <router-view :isPC="isPC" /> <PageFoot :isPC="isPC" />
    </template>

    <template #mobile v-if="!isPC">
      <MobileNav />
      <!-- 垫片 -->
      <div v-if="!isPC" :style="{ height: '6rem' }"></div>
    </template>
  </Layout>
</template>

<script setup>
import NavBar from "./components/NavBar/index.vue";
import Layout from "./components/Layout/index.vue";
import Home from "./views/Home/index.vue";
import MobileNav from "./components/MobileNav/index.vue";
import PageFoot from "./components/PageFoot/index.vue";
import { ref, computed, onMounted, watchEffect, onBeforeMount } from "vue";
let clientWidth = ref(window.innerWidth);
let isPC = true;
watchEffect(() => {
  isPC = clientWidth.value >= 996;
  console.log(isPC);
});
onMounted(() => {
  clientWidth.value = window.innerWidth;
  // console.log(clientWidth.value);
  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth;
    // console.log(isPC);
  });
});
</script>
