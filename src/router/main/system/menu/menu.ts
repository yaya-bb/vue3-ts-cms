/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-01 09:31:19
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-01 09:32:01
 * @FilePath: \vue3-ts-cms\src\router\main\system\menu\menu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const menu = () => import('@/views/main/system/menu/menu.vue');
export default {
  path: '/main/system/menu',
  name: 'menu',
  component: menu,
  children: []
};
