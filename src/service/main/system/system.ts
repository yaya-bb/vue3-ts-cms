import myRequest from '../../index';

import { IDataType } from '../../types';
// service是请求
export function getPageListData(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: queryInfo
  });
}
