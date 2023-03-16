<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-15 15:02:11
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-15 16:54:10
 * @FilePath: \vue3-ts-cms\src\base-ui\echart\src\base-echart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="base-echart">
    <!-- echart的展示需要给其高度、宽度 -->
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue';
import { EChartsOption } from 'echarts';
import useEchart from '../hooks/useEchart';

// 定义props，options代表类型
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: '100%',
    height: '360px'
  }
);
// 绑定元素
const echartDivRef = ref<HTMLElement>();

onMounted(() => {
  // 调用useEchart，将echartDivRef.value传入，返回一个setOptions函数
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { setOptions } = useEchart(echartDivRef.value!);
  // 监听数据的改变，获取echart实例
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped></style>
