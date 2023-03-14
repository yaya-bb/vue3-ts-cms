<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-14 20:42:57
 * @FilePath: \vue3-ts-cms\src\views\main\analysis\dashboard\dashboard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '600px', height: '500px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import * as echarts from 'echarts';

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      // 1.初始化echarts的实例
      const echartInstance = echarts.init(divRef.value!, 'light', {
        renderer: 'svg'
      })
      // 2.编写配置文件
      const option = {
        title: {
          text: 'ECharts 入门示例',
          subtext: '哈哈哈啊'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [18, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 3.设置配置,并且开始绘制
      echartInstance.setOption(option);
    })

    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
