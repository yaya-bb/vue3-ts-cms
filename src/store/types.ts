/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 13:42:44
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-15 16:57:52
 * @FilePath: \vue3-ts-cms\src\store\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ILoginState } from './login/types';
import { ISystemState } from './main/system/types';
import { IDashboardState } from './main/analysis/types';
export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}
// Root里面还有Module
export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  dashboard: IDashboardState;
}
// 交叉类型
export type IStoreType = IRootState & IRootWithModule;
