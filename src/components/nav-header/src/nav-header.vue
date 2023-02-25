<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 14:37:45
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-25 20:56:07
 * @FilePath: \vue3-ts-cms\src\components\nav-header\src\nav-header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav-header">
    <!-- 折叠菜单 -->
    <el-icon :size="30">
      <component
        class="fold-menu"
        :is="iconName"
        @click="handleFoldClick"
      ></component>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  // 组件通信
  emits: ['foldChange'],
  setup(props, { emit }) {
    let iconName = ref('Fold');
    // 默认是不折叠的
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      if (isFold.value == false) {
        iconName.value = 'Expand';
      } else {
        iconName.value = 'Fold';
      }
      // 点击按钮，通知左边导航栏事件【按钮在NavHeader中，导航栏是NavMenu】
      // 因为有共同的父组件Main.vue【按钮 -> Main.vue -> 左导航】
      // 在Main.vue中进行监听
      emit('foldChange', isFold.value);
    };

    return {
      iconName,
      isFold,
      handleFoldClick
    };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
