/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-15 13:06:42
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-15 13:32:20
 * @FilePath: \vue3-ts-cms\src\store\main\analysis\dashboard.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from 'vuex';

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard';

import { IDashboardState } from './types';
import { IRootState } from '../../types';

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    };
  },
  // 保存数据
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    // 网络请求
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', categoryCountResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', categorySaleResult.data);
      const categoryFavorResult = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', categoryFavorResult.data);
      const addressGoodsResult = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', addressGoodsResult.data);
    }
  }
};

export default dashboardModule;
