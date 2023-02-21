/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-13 12:11:25
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-21 21:42:01
 * @FilePath: \vue3-ts-cms\src\service\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// service统一的出口
// 加前缀的目的是区分
import MYRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
import localCache from '@/utils/cache';
const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // interceptors里面是一个个拦截器,原生中没有
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // 获取本地缓存
      const token = localCache.getCache('token');
      if (token) {
        // 通过解构原有config复制一份，再拼接要添加的新属性
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
export default myRequest;
