/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 13:38:23
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-21 23:42:58
 * @FilePath: \vue3-ts-cms\src\store\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Module } from 'vuex';
import {
  accountLoginRequest,
  requestUserInfoById
} from '@/service/login/login';
import localCache from '@/utils/cache';
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
  // 修改state使用mutations
  mutations: {
    // 保存token
    changeToken(state, token: string): void {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      // 发送请求,返回的结果是promise，所以将函数写成异步函数async
      const loginResult = await accountLoginRequest(payload);
      console.log(loginResult);
      const { id, token } = loginResult.data;
      // 拿到token
      commit('changeToken', token);
      // token做本地缓存
      localCache.setCache('token', token);
      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      console.log(123, userInfoResult);
      // 需传入token
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);
      // 缓存用户信息
      localCache.setCache('userInfo', userInfo);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload);
    }
  }
};
export default loginModule;
