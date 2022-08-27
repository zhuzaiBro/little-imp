<template>
  <div class="join-container" :class="{ bigger: isPC }">
    <h2 class="title">Little IMP 欢迎您</h2>
    <form class="empty-container">
      <div class="form-item">
        <span @click="changeStyle">您的姓名</span>
        <input @focus="changeSpan" @blur="checkIsEmpty" type="text" />
      </div>
      <div class="form-item">
        <span @click="changeStyle">公司/组织名称</span>
        <input @focus="changeSpan" @blur="checkIsEmpty" type="text" />
      </div>
      <div class="form-item">
        <span @click="changeStyle">联系方式: 电话</span>
        <input @focus="changeSpan" @blur="checkIsEmpty" type="text" />
      </div>
      <div class="form-item">
        <div class="get-code">
          <input placeholder="输入验证码" type="text" />
          <button @click.prevent="">获取验证码</button>
        </div>
      </div>
      <button @click.prevent="">一起合作</button>
    </form>
  </div>
</template>

<script setup>
import Empty from "../../components/Empty/index.vue";

import titleControl from "../../utils/titleControler";
let props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});
titleControl.setRouteTitle("合作 | LITTLE IMP");
const changeStyle = (e) => {
  console.log(e.target.nextElementSibling);
  e.target.nextElementSibling.focus();
  e.target.classList.add("filled");
};
const checkIsEmpty = (e) => {
  if (!e.target.value) {
    e.target.previousElementSibling.classList.remove("filled");
  }
};
const changeSpan = (e) => {
  e.target.previousElementSibling.classList.add("filled");
};
</script>

<style lang="less" scoped>
.join-container {
  width: 100%;
  height: 100vh;
  padding: 1rem;
  padding-top: 16rem;
  background: linear-gradient(#0e0b16, #2b0f35, #0e0b16);
  &.bigger {
    .empty-container {
      height: auto;
      width: 60vw;
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
      color: #757575;
      display: flex;
      padding: 2rem;
      flex-direction: column;
      line-height: 1.6;
      .form-item {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        span {
          transition: 0.2s;
          font-size: 1.5rem;
          transform: translateY(3.3rem);
          padding-left: 1.2rem;
          height: 3.2rem;
        }
        .filled {
          transform: translateY(0);
          position: relative;
          padding-bottom: 0.3rem;
          &::after {
            content: "";
            display: block;
            background-color: #9473ef;
            height: 0.4rem;
            left: -0.2rem;
            border-radius: 0.2rem;
            width: 12rem;
            position: absolute;
            bottom: 0.3rem;
          }
        }
        input {
          height: 3.2rem;
          border-radius: 0.8rem;
          outline: none;
          border: none;
          background-color: #f5f5f5;
          padding-left: 1.2rem;
        }
        .get-code {
          display: flex;
          input {
            flex-grow: 1;
            align-items: center;
            margin: auto 0;
            margin-right: 1rem;
          }
          span {
            margin: auto 0;
          }
        }
      }
      button {
        background-color: #9473ef;
        border: none;
        border-radius: 1.6rem;
        padding: 1rem;
        outline: none;
        width: 16vw;
        margin: 1rem auto;
        font-size: 1.6rem;
        color: #f5f5f5;
      }
    }
  }
  .title {
    text-align: center;
    color: #fff;
    margin-top: -5vh;
    margin-bottom: 3vh;
  }
  .empty-container {
      height: auto;
      margin: 0 auto;
      border-radius: 1rem;
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
      color: #757575;
      display: flex;
      padding: 2rem;
      flex-direction: column;
      line-height: 1.6;
      .form-item {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        span {
          transition: 0.2s;
          font-size: 1.5rem;
          transform: translateY(3.3rem);
          padding-left: 1.2rem;
          height: 3.2rem;
        }
        .filled {
          transform: translateY(0);
          position: relative;
          padding-bottom: 0.3rem;
          &::after {
            content: "";
            display: block;
            background-color: #9473ef;
            height: 0.4rem;
            left: -0.2rem;
            border-radius: 0.2rem;
            width: 12rem;
            position: absolute;
            bottom: 0.3rem;
          }
        }
        input {
          height: 3.2rem;
          border-radius: 0.8rem;
          outline: none;
          border: none;
          background-color: #f5f5f5;
          padding-left: 1.2rem;
        }
        .get-code {
          display: flex;
          input {
            flex-grow: 1;
            align-items: center;
            margin: auto 0;
            margin-right: 1rem;
          }
          span {
            margin: auto 0;
          }
        }
      }
      button {
        background-color: #9473ef;
        border: none;
        border-radius: 1.6rem;
        padding: 1rem;
        outline: none;
        margin: 1rem auto;
        font-size: 1.6rem;
        color: #f5f5f5;
      }
    }
  
}
</style>