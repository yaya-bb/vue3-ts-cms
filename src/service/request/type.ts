/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-13 13:54:28
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-22 00:11:51
 * @FilePath: \vue3-ts-cms\src\service\request\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface MYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors<T>;
  showLoading?: boolean;
}
