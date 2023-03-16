/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 08:20:55
 * @FilePath: \vue3-ts-cms\src\service\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import myRequest from '../../index';

import { IDataType } from '../../types';
// service是请求
export function getPageListData(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: queryInfo
  });
}
// url: /users/id
export function deletePageData(url: string) {
  return myRequest.delete<IDataType>({
    url: url
  });
}
export function createPageData(url: string, newData: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: newData
  });
}
export function editPageData(url: string, editData: any) {
  return myRequest.patch<IDataType>({
    url: url,
    data: editData
  });
}
