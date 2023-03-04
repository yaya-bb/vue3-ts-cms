/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 15:50:17
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-22 15:02:00
 * @FilePath: \vue3-ts-cms\src\service\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导出网络请求的函数
import myRequest from '../index';
import { IAccount, ILoginResult } from './type';
import { IDataType } from '../types';

// 枚举url
enum LoginAPI {
  AccountLogin = '/login',
  // 获取用户信息api
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
// 账号登录的请求 参数：账号
export function accountLoginRequest(account: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    // 获取url
    url: LoginAPI.AccountLogin,
    data: account
  });
}
// 给用户id，帮忙请求用户数据
export function requestUserInfoById(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  });
}

export function requestUserMenusByRoleId(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  });
}
