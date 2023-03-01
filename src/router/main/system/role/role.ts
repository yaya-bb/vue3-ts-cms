/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-01 09:21:30
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-01 09:21:39
 * @FilePath: \vue3-ts-cms\src\router\main\role\role.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const role = () => import('@/views/main/system/role/role.vue');
export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  children: []
};
