/* eslint-disable prettier/prettier */
/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-15 22:39:08
 * @FilePath: \vue3-ts-cms\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import myRequest from './service';
// 全局变量的引入
import { globalRegister } from './global';
const app = createApp(App);
globalRegister(app);
app.use(router);
app.use(store);
app.mount('#app');
// console.log(VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_URL);
console.log(process.env.VUE_APP_BASE_NAME);
interface DataType {
  data: any,
  returnCode: string,
  success: boolean
}
myRequest.request<DataType>({
  url: '/home/multidata',
  method: 'GET',
  showLoading: true,
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
})