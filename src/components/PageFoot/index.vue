<template>
  <div class="footer-container">
    <div class="content-container">
      <img v-if="isPC" class="logo" src="../../assets/logo.png" alt="" />
      <div class="content">
        <div class="icon-row">
          <div class="icon-wrap">
            <div class="qrcode-wrap">
              <img
                src="http://www.zhuzaibrother.cn/static/upload/2022-2-13-17-39-18-459-6c137.png"
                alt=""
                class="qrcode"
              />
            </div>
            <Icon type="weixin" size="3" />
          </div>

          <div class="icon-wrap">
            <div style="left: 20%" class="qrcode-wrap">
              <img
                src="http://www.zhuzaibrother.cn/static/upload/2022-2-13-17-39-18-459-6c137.png"
                alt=""
                class="qrcode"
              />
            </div>
            <Icon class="weibo" type="weibo" size="3" />
          </div>

          <img class="bigreverse" src="../../assets/bigverse.jpg" alt="" />
        </div>
        <!-- 正文 -->
        <div class="info-container">
          <h3>灵魂迪厅</h3>
          <p>supported by BIGVERSE</p>
          <p class="addr">浙江理工大学</p>
          <p class="icp">
            <a href="https://beian.miit.gov.cn/" target="_blank">
              浙ICP备2022004322号
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from "../Icon/index.vue";
let props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="less" scoped>
.footer-container {
  width: 100%;
  height: 30rem;
  background: rgb(32, 32, 32);
  display: flex;
  justify-content: center;

  .content-container {
    width: 80vw;
    display: flex;
    color: #c3afbf;
    .logo {
      width: 15rem;
      height: 5rem;
      flex-grow: 0;
      margin: auto 1rem;
      padding: 1rem;
      border-radius: 0.3rem;
    }
    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .icon-row {
        margin: 1rem 0;
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem 8rem;
        .icon-wrap {
          position: relative;
          &:hover .qrcode-wrap {
            transform: translateX(-50%) scaleY(1);
          }
          .qrcode-wrap {
            transition: 0.3s;
            position: absolute;
            bottom: 5rem;
            left: 50%;
            padding: 1rem;
            background: #f5f5f5;
            transform: translateX(-50%) scaleY(0);
            width: 10rem;
            height: 10rem;
            border-radius: 1rem;
            transform-origin: bottom;

            img {
              width: 100%;
              height: 100%;
            }
            &::after {
              content: "";
              display: block;
              background-color: #f5f5f5;
              width: 0.6rem;
              height: 0.6rem;
              position: absolute;
              left: 50%;
              transform: translateX(-50%) rotate(45deg);
              bottom: -0.3rem;
            }
          }
        }
        .weibo {
          margin-left: -1.2rem;
        }
        i {
          &:hover {
            color: #f5f5f5;
          }
        }
        .bigreverse {
          border-radius: 1rem;
          width: 3rem;
          height: 3rem;
        }
      }
      .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          margin: 1.2rem 0;
        }
      }
    }
  }
}
</style>