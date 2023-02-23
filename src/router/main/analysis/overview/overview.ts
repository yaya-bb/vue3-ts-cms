/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:58:48
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-23 18:59:20
 * @FilePath: \vue3-ts-cms\src\router\main\analysis\overview\overview.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const overview = () => import('@/views/main/analysis/overview/overview.vue')
export default {
  path: '/main/analysis/overview',
  name: 'overview',
  component: overview,
  children: []
};
