<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-23 18:29:06
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-04 22:56:35
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user">
    <!-- 配置传给给page-search组件 -->
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <!-- :listData是组件中的prop的属性，:listData="userList"传入数据 -->
      <my-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </my-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import PageSearch from '@/components/page-search';
import { useStore } from '@/store';
import { searchFormConfig } from './config/search.config';
import MyTable from '@/base-ui/table';

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    MyTable
  },
  setup() {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    const userList = computed(() => store.state.system.userList);
    // 分页器
    const userCount = computed(() => store.state.system.userCount);
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ];
    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    };
  }
});
</script>

<style scoped></style>
