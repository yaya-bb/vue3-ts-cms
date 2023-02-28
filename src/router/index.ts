/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-27 20:38:15
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LocalCache from '@/utils/cache';
import { mapMenusToRoutes } from '@/utils/map-menus';
import store from '@/store';
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
    // children: [] => 根据userMenus来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
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
    // userMenus => routes
    const userMenus = (store.state as any).login.userMenus;
    const routes = mapMenusToRoutes(userMenus);
    // 将routes -> router.main.children
    // 注册所有的路由
    routes.forEach((route) => {
      router.addRoute('main', route);
    });
  }
  if (to.path.indexOf('/main') !== -1) {
    if (to.name === 'notFound') {
      to.name = 'user';
    }
  }
});
export default router;
