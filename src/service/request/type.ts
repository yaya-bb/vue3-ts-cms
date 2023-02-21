/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-13 13:54:28
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-21 20:36:49
 * @FilePath: \vue3-ts-cms\src\service\request\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
// 实例拦截器
// 使用接口来设置泛型
export interface MYRequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  // 响应拦截
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
// 因为AxiosRequestConfig不允许传入拦截器，所以我们自定义RequestConfig并让其继承AxiosRequestConfig
export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors<T>;
  showLoading?: boolean;
}
