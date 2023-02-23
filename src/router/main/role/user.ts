/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:26:20
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-23 18:57:33
 * @FilePath: \vue3-ts-cms\src\router\main\role\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 动态路由
const user = () => import('@/views/main/system/user/user.vue');
export default {
  name: 'user',
  path: 'main/system/user',
  // 懒加载-映射关系
  component: user,
  children: []
};
