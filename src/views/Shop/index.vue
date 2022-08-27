<template>
  <div class="shop-container">
    <Loading v-show="loadingRef" />

    <!-- 中间互动的轮播图 -->
    <div class="rotation-wrap" :style="{ height: isPC ? '50rem' : '30rem' }">
      <Rotation v-if="imgList" :imgList="imgList" />
    </div>


    <!-- 商品列表 -->
    <div
      v-if="goodList.length"
      class="goods-container"
      :class="{ 'grid-4': isPC }"
    >
      <div class="good-item" v-for="item in goodList" :key="item.id">
        <div class="thumb">
          <router-link :to="{ name: 'detail', params: { link: item.link } }">
            <img :src="item.imgUrl" :alt="item.info" />
          </router-link>
        </div>
        <h3 class="good-title">{{ item.name }}</h3>
        <div class="price">
          <span>￥{{ item.price }}</span>
        </div>
        <div class="good-info">
          <span>{{ item.info }}</span>
        </div>
      </div>
    </div>
    <!-- 告知用户是否到底了 -->
    <div class="tip-container">
      <p v-show="!hasMore && !loadingRef">没有更多啦~</p>
      <div v-show="isGetting" class="loading">
        <img src="../../assets/loading.svg" alt="" />
        <p>正在加载中...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getBanner, login } from "../../api/banner";
import Rotation from "../../components/RotationPlot/index.vue";
import { useRouter } from "vue-router";
import { onMounted, ref, reactive, onUnmounted } from "vue";
import titleControl from "../../utils/titleControler";
import { addGood, getGood } from "../../api/good";
import Loading from "../../components/Loading/index.vue";

// 加载
let loadingRef = ref(true);
let props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});

let page = 1;
let count: number = 0;
let total: number = 0;
let isGetting = ref(false);

// 处理是否拿到了所有的数据
let hasMore = ref(true);

let imgList = ref(null);
async function getPage() {
  const res = await getBanner();
  imgList.value = res.datas;
}
getPage();

const fetchMore = async () => {
  if (count >= total || isGetting.value) {
    hasMore.value = false;
    return;
  }
  // 正在请求中，不要多次触发上面的请求函数
  isGetting.value = true;
  page++;
  count += 12;
  const resp: any = await getGood(page);
  goodList.value = goodList.value.concat(resp.datas);
  isGetting.value = false;
  console.log(count, total);
};

// 第一次请求数据，然后渲染商品
let goodList: any = ref([]);
getGood(page).then((resp: any) => {
  goodList.value = resp.datas;
  total = +resp.total;
  count += goodList.value.length;
  loadingRef.value = false;
});

const fetchData = () => {
  const windowHeight = window.innerHeight;
  const tip = document.querySelector(".tip-container");
  if (tip.getClientRects()[0].top <= windowHeight + 20 && !isGetting.value) {
    fetchMore();
  }
};
onMounted(() => {
  titleControl.setRouteTitle("商城 | LITTLE IMP");
  window.addEventListener("scroll", fetchData);
  onUnmounted(() => {
    window.removeEventListener("scroll", fetchData);
  });
});
</script>

<style lang="less" scoped>
.shop-container {
  padding: 3rem 0;
  background: linear-gradient(#0e0b16, #2b0f35, #0e0b16);
  padding-top: 10rem;

  .title {
    text-align: center;
    color: #fff;
  }
  .goods-container {
    margin: 0 auto;
    width: 80vw;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    &.grid-4 {
      grid-template-columns: repeat(3, 1fr);
      .good-item {
        width: 26rem;
        .thumb {
          width: 24rem;
          height: 24rem;
        }
      }
    }
    .good-item {
      // pc端样式
      box-shadow: 0.1rem 0.1rem 0.1rem #666;
      border-radius: 1rem;
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 36vw;
      padding: 1rem;
      transition: 0.3s;
      background-color: #f5f5f5;
      &:hover {
        transform: translateY(-0.2rem);
        box-shadow: 0.2rem 0.2rem 0.2rem #fff;
      }
      .thumb {
        overflow: hidden;
        border-radius: 1rem;
        width: 32vw;
        height: 32vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .price {
        color: #ff6770;
      }
      span {
        white-space: normal;
      }
    }
  }

  .tip-container {
    display: flex;
    margin: 2rem 0;
    height: 2rem;
    justify-content: center;
    align-items: center;
    .loading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .title-container {
    color: #fff;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .rotation-wrap {
    margin: 0 auto;
    height: 50rem;
    border-radius: 1rem;
    width: 80vw;
    position: relative;
    overflow: hidden;
    li {
      height: 100%;
    }
  }
}
</style>