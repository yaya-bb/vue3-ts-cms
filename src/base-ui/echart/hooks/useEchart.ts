/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-15 15:02:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-15 16:24:46
 * @FilePath: \vue3-ts-cms\src\base-ui\echart\hooks\useEchart.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as echarts from 'echarts';

import chinaMapData from '../data/china.json';

echarts.registerMap('china', chinaMapData);

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };

  const updateSize = () => {
    echartInstance.resize();
  };
  // 监听浏览器宽度的变化
  window.addEventListener('resize', () => {
    // 调用echartInstance实例中的resize方法
    echartInstance.resize();
  });
  // 对象形式导出，在解构的时候可以只解构其中一个
  return {
    echartInstance,
    setOptions,
    updateSize
  };
}
