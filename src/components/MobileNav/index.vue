<template>
  <div class="mobile-nav-container">
    <router-link to="/shop"
      ><div class="nav-item">
        <Icon type="shop" size="2" /><a class="icon-word" href="">商城</a>
      </div></router-link
    >

    <router-link :to="{ name: 'showhall' }"
      ><div class="nav-item">
        <Icon type="show" size="2" /><a class="icon-word" href="">展厅</a>
      </div>
    </router-link>

    <router-link to="/join"
      ><div class="nav-item">
        <Icon type="join" size="2" /><a class="icon-word" href="">合作</a>
      </div>
    </router-link>
    <router-link to="/community"
      ><div class="nav-item">
        <Icon type="comment" size="2" /><a class="icon-word" href="">留言</a>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import Icon from "../Icon/index.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="less" scoped>
.mobile-nav-container {
  z-index: 999;
  justify-content: space-around;
  align-items: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  color: #000;
  background: #f5f5f5;
  .router-link-exact-active {
    // display: block;

    .nav-item {
      border-radius: 50%;
      color: #202020;
      background: linear-gradient(
        120deg,
        rgb(241, 204, 209),
        rgb(243, 183, 247),
        rgb(159, 178, 247)
      );
      transform: translateY(-1rem);
    }
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    height: 6rem;
    width: 6rem;
    .icon-word {
      margin-top: 0.6rem;
    }
  }
}
</style>