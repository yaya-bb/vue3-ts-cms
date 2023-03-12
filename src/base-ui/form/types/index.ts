/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-11 13:03:13
 * @FilePath: \vue3-ts-cms\src\base-ui\form\types\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEH
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker';

export interface IFormItem {
  // field代表字段
  field: string;
  type: IFormType;
  label: string;
  // 验证规则
  rules?: any[];
  placeholder?: any;
  // 针对select
  options?: any[];
  // 针对特殊的属性
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
