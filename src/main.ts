import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import myRequest from './service';
import 'normalize.css';
import './assets/css/index.less';
// 全局变量的引入
import { globalRegister } from './global';
// 引入element-plus的icon
import * as ElementPlusIcons from '@element-plus/icons-vue';
import { setupStore } from './store';
const app = createApp(App);
globalRegister(app);
// 加载icon
for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component);
}
setupStore();
app.use(store);
app.use(router);
app.mount('#app');
interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}
myRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: true
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     console.log('单独请求的config');
    //     return config;
    //   },
    //   responseInterceptor: (res) => {
    //     console.log('单独响应的config');
    //     return res;
    //   }
    // }
  })
  .then((res) => {
    console.log(res.data);
  });
