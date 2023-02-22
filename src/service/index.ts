/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-13 12:11:25
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-22 00:01:54
 * @FilePath: \vue3-ts-cms\src\service\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// service统一出口
import MYRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';

import localCache from '@/utils/cache';

const hyRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export default hyRequest;
