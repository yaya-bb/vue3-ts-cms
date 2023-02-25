/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:57:45
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-23 19:00:02
 * @FilePath: \vue3-ts-cms\src\router\main\system\role\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const user = () => import('@/views/main/system/role/user.vue');
export default {
  path: '/main/system/role',
  name: 'user',
  component: user,
  children: []
};
