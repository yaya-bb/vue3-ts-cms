import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./service/axios_demo";
// 全局变量的引入
import { globalRegister } from "./global";
const app = createApp(App);
globalRegister(app);
app.use(router);
app.use(store);
app.mount("#app");
