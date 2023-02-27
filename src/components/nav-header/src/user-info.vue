<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-27 19:27:31
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-27 19:51:09
 * @FilePath: \vue3-ts-cms\src\components\nav-header\src\user-info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <!-- 头像组件 -->
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    // 获取用户名字
    const name = computed(() => store.state.login.userInfo.name);

    return {
      name
    };
  }
});
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
