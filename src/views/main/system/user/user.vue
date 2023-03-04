<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:29:06
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-04 10:33:27
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:29:06
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-04 10:28:29
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user">
    <!-- 配置传给给page-search组件 -->
    <page-search :searchFormConfig="searchFormConfig"/>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSearch from '@/components/page-search';
import { searchFormConfig } from './config/search.config';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return {
      searchFormConfig
    };
  }
});
</script>

<style scoped></style>
