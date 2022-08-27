<template>
  <div class="hello-welcome" :class="{ mobileWel: !isPC }">
    <h2 class="wel">欢迎来到</h2>
    <div class="soul-disco">
      <img src="../../assets/font.png" alt="" />
      <h2 v-show="isPC">灵魂迪厅</h2>
    </div>

    <h2 class="desc">由艺术创作者与专有NFT藏家 组成的主题线上社区</h2>
    <div class="learn-more">
      <h2>了解更多</h2>
      <Icon size="2" type="arrowRight" />
    </div>
    <div class="dance-imp">
      <img src="../../assets/dance.png" alt="" />
    </div>

    <div class="bottom"></div>
  </div>

  <NFTCard :isPC="isPC" />

  <NineBlocks :cardList="cardList" :isPC="isPC" />

  <div class="home-container">
    <!-- 关于我们的一些介绍 -->
    <div class="info-container">
      <div class="title-container" v-if="isPC">
        <h1>集体智慧<br />汪汪姐很懒，什么都没留下</h1>
      </div>
      <div class="info-content" :class="{ 'flex-4': isPC }">
        <div class="pc-info-item" :class="{ 'info-item': !isPC }">
          <Icon type="earth" size="6" />
          <h3>潮流文化</h3>
          <div class="text">
            让更多国外潮玩品牌关注国内市场，为中国潮流玩具文化的蓬勃发展增添动力
          </div>
        </div>
        <div class="pc-info-item" :class="{ 'info-item': !isPC }">
          <Icon type="woshou" size="6" />
          <h3>包容</h3>
          <div class="text">
            让更多国外潮玩品牌关注国内市场，为中国潮流玩具文化的蓬勃发展增添动力
          </div>
        </div>
        <div class="pc-info-item" :class="{ 'info-item': !isPC }">
          <Icon type="equal" size="6" />
          <h3>平等无界限</h3>
          <div class="text">
            让更多国外潮玩品牌关注国内市场，为中国潮流玩具文化的蓬勃发展增添动力
          </div>
        </div>
        <div class="pc-info-item" :class="{ 'info-item': !isPC }">
          <Icon type="color" size="6" />
          <h3>释放个性</h3>
          <div class="text">
            让更多国外潮玩品牌关注国内市场，为中国潮流玩具文化的蓬勃发展增添动力
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import loading from "../../assets/loading.svg";
import NFTCard from "./components/NFTCard.vue";
import NineBlocks from "./components/NineBlocks.vue";
import { onMounted, ref } from "vue";
import { getBlocks } from "../../api/nineBlock";
import titleControl from "../../utils/titleControler";
import Icon from "../../components/Icon/index.vue";
const props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});

let cardList = ref(null);
onMounted(async () => {
  titleControl.setRouteTitle("首页 | LITTLE IMP");
  const result = await getBlocks();
  cardList.value = result.datas.slice(0, 9);
  // console.log(cardList.value);
});
</script>

<style lang="less" scoped>
.hello-welcome {
  padding: 20rem 15rem;
  width: 100%;
  color: #e6b5db;
  height: 100vh;
  background: linear-gradient(#0e0b16, #2b0f35, #0e0b16);
  line-height: 2.5;
  position: relative;
  &.mobileWel {
    padding: 20rem 2rem;
    .wel {
      margin-top: 5rem;
    }
    .dance-imp {
      height: 40%;
    }
  }
  .soul-disco {
    display: flex;
    img {
      width: 20rem;
      height: 5rem;
      margin-right: 2rem;
    }
  }
  h2 {
    // white-space: normal;
    font-size: 2.5rem;
    font-weight: 500;
    &.desc {
      font-size: 2rem;
      white-space: normal;
    }
  }
  .learn-more {
    display: flex;
    align-items: center;
    i {
      margin: auto 2rem;
    }
    &:hover {
      background-color: #ff6770;
    }
  }
  .dance-imp {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    img {
      margin-left: 10%;
      width: 90%;
      height: 100%;
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 12rem;
    width: 100%;
    background-image: url("../../assets/bg.png");
    background-size: 130px 120px;
    background-position: 0 30px;
  }
}
@import "../../assets/styles/var.less";
.home-container {
  background: #0e0b16;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 15rem;

  .info-container {
    color: #202020;
    margin-top: 3rem;
    border-radius: 1rem;
    width: 80vw;
    // padding: 2rem 0;
    // background-color: rgb(254, 186, 10);
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
    text-align: center;
    .title-container {
      margin: 2.4rem 0;
      height: 10rem;
      h1 {
        color: #202020;
        font-weight: normal;
      }
    }
    .info-content {
      display: grid;
      justify-items: center;

      grid-template-columns: repeat(2, 1fr);
      position: relative;
      &.flex-4 {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .pc-info-item {
        margin: 1rem;
        width: 24rem;
        height: 24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.info-item {
          width: 35vw;
          height: 18rem;
        }
      }
      .text {
        white-space: normal;
        padding: 1.6rem;
      }
    }
  }
}
</style>