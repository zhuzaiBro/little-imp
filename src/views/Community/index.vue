<template>
  <div class="community-container">
    <div  id="comments" class="comments-container">
       <Loading v-show="isLoading"  />
      <div id="SOHUCS">
       
      </div>
    </div>
  </div>
</template>
<script setup>
import createComponent from "../../compositon/useCreateComponent";
import { onMounted, onUnmounted, ref } from "vue";
import Loading from "../../components/Loading/index.vue";
import titleControl from "../../utils/titleControler";
let isLoading = ref(true);
onMounted(async () => {
  titleControl.setRouteTitle("社区 | LITTLE IMP");
  document.body.style.overflow = "hidden";
  // document.querySelector(".footer-container").style.display = "none";

  await createComponent(isLoading);
  document.querySelector(".community-container").style.height = "auto";
  // document.querySelector(".community-container").style.height = "100%";
  document.body.style.overflow = "auto";
});
onUnmounted(() => {
  document.querySelector(".footer-container").style.display = "flex";
});
</script>

<style lang="less" scoped>
.community-container {
  // margin-top: -6rem;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 2rem 0;
  background: linear-gradient(#0e0b16, #2b0f35, #0e0b16);
  padding-top: 12rem;
  position: relative;
  .comments-container {
    width: 100%;

    // background-color: #f5f5f5;
    margin: 6rem auto;
    // height: 90vh;
    #SOHUCS {
      margin: 0 auto;
      box-shadow: 0.1rem 0.1rem 0.1rem #666;
      padding: 1rem;
      border-radius: 1.2rem;
      width: 90%;
      background: linear-gradient(
        120deg,
        rgb(241, 204, 209),
        rgb(243, 183, 247),
        rgb(159, 178, 247),
        rgb(241, 204, 209),
        rgb(243, 183, 247),
        rgb(159, 178, 247)
      );
      background-size: 600%;
      animation: change 5s infinite;
    }
  }
}
</style>