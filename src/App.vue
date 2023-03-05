<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 17:55:04
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-05 19:52:28
 * @FilePath: \vue3-ts-cms\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
