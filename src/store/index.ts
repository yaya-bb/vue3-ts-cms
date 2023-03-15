/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-15 13:18:21
 * @FilePath: \vue3-ts-cms\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable prettier/prettier */
// as取别名
import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import system from './main/system/system';
import dashboard from './main/analysis/dashboard';
import { IRootState, IStoreType } from './types';
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
    // state是数据状态管理对象
    state() {
      return {
        name: 'coderwhy',
        age: 18,
        entireDepartment: [],
        entireRole: [],
        entireMenu: []
      }
    },
    // getter是对state的数据对象的读取，可把它看作在获取数据之前进行的一种编辑
    getters: {},
    // mutations可写很多的改变状态的方法
    mutations: {
      changeEntireDepartment(state, list) {
        state.entireDepartment = list
      },
      changeEntireRole(state, list) {
        state.entireRole = list
      },
      changeEntireMenu(state, list) {
        state.entireMenu = list
      }
    },
    // Actions里面可定义我们向执行异步的方法，在这里它并不会立即去执行，而是在页面中去dispatch这个方法
    actions: {
      // 初始化数据
      async getInitialDataAction({ commit }) {
        // 1.请求部门和角色数据
        const departmentResult = await getPageListData('/department/list', {
          offset: 0,
          size: 1000
        })
        const { list: departmentList } = departmentResult.data
        const roleResult = await getPageListData('/role/list', {
          offset: 0,
          size: 1000
        })
        const { list: roleList } = roleResult.data;
        const menuResult = await getPageListData('/menu/list', {});
        const { list: menuList } = menuResult.data;
        // 2.保存数据
        commit('changeEntireDepartment', departmentList);
        commit('changeEntireRole', roleList);
        commit('changeEntireMenu', menuList);
      }
    },
    modules: {
      login,
      system,
      dashboard
    }
});
// 对数据做初始化
export function setupStore() {
  // 含有异步操作
  store.dispatch('login/loadLocalLogin');
  // 调用,可能在调用departmentResult的时候，没有获取到token'
  // store.dispatch('getInitialDataAction');
};
// 拥有自己的useStore,返回store
export function useStore(): Store<IStoreType> {
  return useVuexStore();
};
export default store;
