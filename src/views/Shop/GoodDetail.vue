<template>
  <div class="good-detail-container">
    <iframe class="good-frame" :src="link" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const link = router.currentRoute._value.params.link;
</script>

<style lang="less" scoped>
.good-detail-container {
  width: 100%;
  height: 85vh;
  .good-frame {
    width: 100%;
    height: 100%;
  }
}
</style>