/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-25 21:47:46
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-27 16:35:27
 * @FilePath: \vue3-ts-cms\src\utils\map-menus.ts
 * @Description: 对Menus做映射，转成其他东西
 */
import { RouteRecordRaw } from 'vue-router';
// 返回的类型是一个router数组类型
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  // 将userMenus映射到RouteRecordRaw数组里面[将菜单映射到路由数组里面]
  const routes: RouteRecordRaw[] = [];
  // 1. 先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  // 动态加载-获取路由对象
  // 去'../router/main'中匹配所有ts文件;true则代表递归查找
  const routeFiles = require.context('../router/main', true, /\.ts/);
  // webpack函数
  routeFiles.keys().forEach((key) => {
    // ./system/user/user.ts
    // 对路径进行处理然后拼接
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  // 2. 根据菜单获取需要添加的routes
  // type === 1 -> children
  // type === 2 -> url -> route[递归调用]
  // 递归获取route
  const _recurseGetRoute = (menus: any[]) => {
    // 遍历所有元素
    for (const menu of menus) {
      // type == 2 才需要进行映射
      if (menu.type == 2) {
        // 在所有路由中进行查找
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        // 递归调用函数将children映射出来
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}
