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
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout: any;
  itemLayout: any;
}
