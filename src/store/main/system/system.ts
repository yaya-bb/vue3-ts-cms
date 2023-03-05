/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-05 22:00:27
 * @FilePath: \vue3-ts-cms\src\store\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-04 10:46:56
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-05 20:52:14
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
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    };
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList;
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount;
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    }
  },
  // 逻辑-请求用户数据
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1. 获取pageUrl
      const pageName = payload.pageName;
      let pageUrl = '';
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = 'role/list';
          break;
      }
      // 2.对页面发送请求
      const pageResult = await getPageListData(
        pageUrl,
        payload.queryInfo
      );
      // 3.将数据存储到store中
      const { list, totalCount } = pageResult.data;
      const changePageName =
      pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
    commit(`change${changePageName}List`, list);
    commit(`change${changePageName}Count`, totalCount);
    }
  }
};

export default systemModule;
