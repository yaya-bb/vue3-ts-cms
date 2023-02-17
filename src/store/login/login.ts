/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 13:38:23
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-17 15:50:02
 * @FilePath: \vue3-ts-cms\src\store\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Module } from 'vuex';
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
    accountLoginAction({ commit }, payload: any) {
      // 实现登录逻辑
      console.log('执行accountLoginAction', payload);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload);
    }
  }
};
export default loginModule;
