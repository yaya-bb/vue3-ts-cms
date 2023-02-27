/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-25 21:47:46
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-27 09:06:29
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
  // 动态加载
  // webpack函数:去'../router/main'中匹配所有ts文件;true则代表递归查找
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    console.log(key);
  });
  // 2. 根据菜单获取需要添加的routes
  return routes;
}
