import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js';
import vLoading from "./directives/loading.js";

const app = createApp(App);
app.directive("loading", vLoading);
app.use(router).mount('#app')