/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 类实例:对axios进行封装
import axios from 'axios';
// 导入axios对应的类型
import type { AxiosInstance } from 'axios';
import type { MYRequestInterceptors, MYRequestConfig } from './types';
// constructor类的构造器，传入config作为基本的配置
class MYRequest {
  // 如果有多个request对象，最好是创建多个对应的instance对象
  // 传入不同配置的时候，每次都会创建一个新的instance
  instance: AxiosInstance;
  interceptors?: MYRequestInterceptors;
  constructor(config: MYRequestConfig) {
    // 自己创建实例
    this.instance = axios.create(config);
    // 保存interceptors
    this.interceptors = config.interceptors;
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      // this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器:请求拦截成功');
        return config;
      },
      (err) => {
        console.log('所有实例都有的拦截器:请求拦截失败');
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器:响应拦截成功');
        return res;
      },
      (err) => {
        console.log('所有实例都有的拦截器:响应拦截失败');
        return err;
      }
    );
  }
  // AxiosInstance里面就有request
  request(config: MYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      // 将config进行转换
      config = config.interceptors.requestInterceptor(config);
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
      }
      console.log(res);
    });
  }
}
export default MYRequest;
