/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-23 18:59:51
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-22 15:31:11
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LocalCache from '@/utils/cache';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 只要不是登录页，就先获取一下token
    const token = LocalCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
});
export default router;
