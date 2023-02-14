// service统一的出口
// 加前缀的目的是区分
import MYRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // interceptors里面是一个个拦截器,原生中没有
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截');
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截');
      return err;
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截');
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截');
      return err;
    }
  }
});
export default myRequest;
