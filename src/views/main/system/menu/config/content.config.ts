/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-07 19:44:35
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-07 20:48:46
 * @FilePath: \vue3-ts-cms\src\views\main\system\menu\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  // 整个属性要传递到table
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  // 不需要底部分页器
  showFooter: false
}
