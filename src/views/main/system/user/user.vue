<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:29:06
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-03 12:50:16
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user">
    <!-- 将formData传到表单 -->
    <!-- v-model组件实现双向绑定，而传过去的属性就是modelValue而不是formData -->
    <my-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </my-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyForm from '@/base-ui/form';

import { searchFormConfig } from './config/search.config';

export default defineComponent({
  name: 'user',
  components: {
    MyForm
  },
  setup() {
    // 数据复杂，是一个对象
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    });
    return {
      formData,
      searchFormConfig
    };
  }
});
</script>

<style scoped>
.handle-btn {
  text-align: right;
  padding: 2px 50px 20px 5px;
}
</style>
