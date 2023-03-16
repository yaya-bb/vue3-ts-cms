<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-07 08:31:51
 * @FilePath: \vue3-ts-cms\src\components\page-search\src\page-search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-search">
    <My-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </My-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyForm from '@/base-ui/form';

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    MyForm
  },
  // 传事件出去
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = '';
    }
    const formData = ref(formOriginData);

    // 2.优化二: 当用户点击重置
    const handleResetClick = () => {
      // 修改属性
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData;
      emit('resetBtnClick');
    };

    // 3.优化三: 当用户点击搜索
    const handleQueryClick = () => {
      console.log('123');
      emit('queryBtnClick', formData.value);
    };

    return {
      formData,
      handleResetClick,
      handleQueryClick
    };
  }
});
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
