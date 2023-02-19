/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-13 12:15:08
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-19 23:13:33
 * @FilePath: \vue3-ts-cms\src\service\request\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 类实例:对axios进行封装
import axios from 'axios';
// 导入axios对应的类型
import type { AxiosInstance } from 'axios';
import type { MYRequestInterceptors, MYRequestConfig } from './type';
import { ElLoading } from 'element-plus/lib/index';
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js';

const DEAFULT_Loading = true;
// constructor类的构造器，传入config作为基本的配置
class MYRequest {
  // 如果有多个request对象，最好是创建多个对应的instance对象
  // 传入不同配置的时候，每次都会创建一个新的instance
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptors?: MYRequestInterceptors;
  showLoading: boolean;
  loading?: LoadingInstance;
  // 类拦截器
  constructor(config: MYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_Loading;
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
    // 主要再这里处理请求发送前的一些工作，比如给HTTP Header添加token、开启Loading效果、设置取消请求等
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器:请求拦截成功');
        if (this.showLoading) {
          // lock蒙版
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.1)'
          });
        }
        return config;
      },
      (err) => {
        console.log('所有实例都有的拦截器:请求拦截失败');
        return err;
      }
    );
    // 响应拦截器
    // 1. 根据自定义错误码判断请求是否成功，只返回组件会用到的数据data
    // 2. 如果错误码判断请求失败，此时为业务错误，比如用户名不存在，在这里进行提示
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器:响应拦截成功');
        // 将loading移除
        this.loading?.close();
        // 接口的请求结果在res.data中
        const data = res.data;
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息');
        } else {
          return data;
        }
      },
      (err) => {
        console.log('所有实例都有的拦截器:响应拦截失败');
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~');
        }
        return err;
      }
    );
  }
  // 接口拦截
  // 目的：为了帮编译器正确识别类型
  // 类型由请求者决定，使用泛型 -> 允许传递类型，从而改变request()方法的返回值类型
  request<T>(config: MYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1. 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        // 将config进行转换
        config = config.interceptors.requestInterceptor(config);
      }
      // 2. 判断是否显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      // res是T类型
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1)单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res);
          }
          // 2)将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEAFULT_Loading;
          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEAFULT_Loading;
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}
// 拦截器的执行顺序为实例请求 -> 类请求 -> 实例响应 -> 类响应
export default MYRequest;
