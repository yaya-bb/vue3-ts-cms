<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 09:09:56
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <!-- @newBtnClick、@editBtnClick监听发送出来的事件 -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
// 组件
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModal from '@/components/page-modal';
// 配置文件
import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';
// hook
import { usePageSearch } from '@/hooks/use-page-search';
import { usePageModal } from '@/hooks/use-page-modal';

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();

    // pageModal相关的hook逻辑
    // 1.处理密码的逻辑 -> 由于password特性是单独的，所以写在页面上而不是hook中
    const newCallback = () => {
      // 新建时不需要设置密码，因此找到密码选项
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      );
      // 将其进行修改
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      // 编辑可以修改密码
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      );
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      passwordItem!.isHidden = true;
    };

    // 2.动态添加部门和角色列表
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      );
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id };
      });
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      );
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id };
      });
      // 返回
      return modalConfig;
    });

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback);

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfigRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    };
  }
});
</script>

<style scoped></style>
