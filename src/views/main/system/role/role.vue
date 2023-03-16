<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-14 18:57:46
 * @FilePath: \vue3-ts-cms\src\views\main\system\role\role.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue';
import { useStore } from '@/store';
import { menuMapLeafKeys } from '@/utils/map-menus';
// 用于获取ElTree的对象
import { ElTree } from 'element-plus';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModal from '@/components/page-modal';

import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';

import { usePageModal } from '@/hooks/use-page-modal';
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    // 1.处理pageModal的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      // 获取到所有的key
      const leafKeys = menuMapLeafKeys(item.menuList);
      nextTick(() => {
        console.log(elTreeRef.value);
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback);

    const store = useStore();
    const menus = computed(() => store.state.entireMenu);

    const otherInfo = ref({});
    // 复选框选中的发生的事件，两个参数，第一个参数是传递给data属性的数组，第二个参数是对象
    const handleCheckChange = (data1: any, data2: any) => {
      // 获取key
      const checkedKeys = data2.checkedKeys;
      // 半选
      const halfCheckedKeys = data2.halfCheckedKeys;
      // 合并
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      // 放到对象中
      otherInfo.value = { menuList };
    };

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    };
  }
});
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
