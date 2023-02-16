/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-16 21:33:28
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
