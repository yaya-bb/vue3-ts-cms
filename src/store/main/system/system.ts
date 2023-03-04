/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-04 10:46:56
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-04 20:52:05
 * @FilePath: \vue3-ts-cms\src\store\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from 'vuex';
import { IRootState } from '@/store/types';
import { ISystemState } from './types';
// 发送请求
import { getPageListData } from '@/service/main/system/system';

const systemModule: Module<ISystemState, IRootState> = {
  // 作用域
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  // 逻辑-请求用户数据
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 获取到数据
      console.log(payload.pageUrl);
      console.log(payload.queryInfo);

      // 1.对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      );
      const { list, totalCount } = pageResult.data;
      commit('changeUserList', list);
      commit('changeUserCount', totalCount);
    }
  }
};

export default systemModule;
