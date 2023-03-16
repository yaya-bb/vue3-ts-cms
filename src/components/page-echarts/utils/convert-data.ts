/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-15 16:42:04
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-15 23:28:55
 * @FilePath: \vue3-ts-cms\src\components\page-echarts\utils\convert-data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { coordinateData } from './coordinate-data';
// 转换数据
export const convertData = function (data: any) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
