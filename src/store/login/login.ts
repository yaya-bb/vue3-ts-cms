/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 13:38:23
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-18 10:08:59
 * @FilePath: \vue3-ts-cms\src\store\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Module } from 'vuex';
import { accountLoginRequest } from '@/service/login/login';
import { IAccount } from '@/service/login/type';
import { ILoginState } from './types';
import { IRootState } from '../types';

// S:模块中state的类型；R：根store的state类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    };
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      // 发送请求,返回的结果是promise，所以将函数写成异步函数async
      const loginRequest = await accountLoginRequest(payload);
      console.log(loginRequest);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload);
    }
  }
};
export default loginModule;
