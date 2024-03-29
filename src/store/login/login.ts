/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 13:38:23
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 18:32:24
 * @FilePath: \vue3-ts-cms\src\store\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from 'vuex';

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login';
import localCache from '@/utils/cache';
import router from '@/router';
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus';
import { IAccount } from '@/service/login/type';
import { ILoginState } from './types';
import { IRootState } from '../types';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    };
  },
  getters: {},
  // mutations中不要加异步的内容
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
      // userMenus => routes (映射) type=2的时候进行映射
      const routes = mapMenusToRoutes(userMenus);
      // 将routes =>router.main.children
      // 动态添加路由addRoute,给名称会去寻找其一级路由
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
      const permissions = mapMenusToPermissions(userMenus);
      state.permissions = permissions;
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit('changeToken', token);
      localCache.setCache('token', token);
      // 发送初始化的请求(完整的role/department)
      // 会调用根里面的action
      dispatch('getInitialDataAction', null, { root: true });
      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);
      // 缓存用户信息
      localCache.setCache('userInfo', userInfo);

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      console.log(userMenus);
      // 存储
      commit('changeUserMenus', userMenus);
      localCache.setCache('userMenus', userMenus);

      // 路由跳转
      // 4. 跳到首页
      router.push('/main');
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
        dispatch('getInitialDataAction', null, { root: true });
      }
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = localCache.getCache('userMenus');
      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
    }
  }
};

export default loginModule;
