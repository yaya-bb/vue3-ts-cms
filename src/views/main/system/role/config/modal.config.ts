/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-13 18:39:22
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 18:39:45
 * @FilePath: \vue3-ts-cms\src\views\main\system\role\config\modal.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from '@/base-ui/form';

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
};
