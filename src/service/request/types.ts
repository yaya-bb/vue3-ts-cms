/* eslint-disable prettier/prettier */
// 导入axios对应的类型
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
// 使用interface进行封装接口
export interface MYRequestInterceptors {
  // requestInterceptor类型是一个函数类型，并且有一个参数
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // 错误拦截
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (err: any) => any;
}

// 继承AxiosRequestConfig
export interface MYRequestConfig extends AxiosRequestConfig {
  // 对原来的进行扩展
  interceptors?: MYRequestInterceptors;
}
