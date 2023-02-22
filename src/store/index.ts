/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-22 19:12:57
 * @FilePath: \vue3-ts-cms\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable prettier/prettier */
import { createStore } from 'vuex';
import login from './login/login';
import { IRootState } from './types';

const store = createStore<IRootState>({
    // state是数据状态管理对象
    // state: {},
    // getter是对state的数据对象的读取，可把它看作在获取数据之前进行的一种编辑
    getters: {},
    // mutations可写很多的改变状态的方法
    mutations: {},
    // Actions里面可定义我们向执行异步的方法，在这里它并不会立即去执行，而是在页面中去dispatch这个方法
    actions: {},
    modules: {
      login
    }
});
// 对数据做初始化
export function setupStore() {
  // 含有异步操作
  store.dispatch('login/loadLocalLogin');
};
export default store;
