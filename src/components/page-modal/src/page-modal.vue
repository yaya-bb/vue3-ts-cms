<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-10 10:08:58
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 21:23:04
 * @FilePath: \vue3-ts-cms\src\components\page-modal\src\page-modal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <my-form v-bind="modalConfig" v-model="formData"></my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';

import MyForm from '@/base-ui/form';

export default defineComponent({
  components: {
    MyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref<any>({});

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );

    // 点击确定按钮的逻辑
    const store = useStore();
    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑用户');
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          // 新建的数据在formData里面
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        });
      } else {
        // 新建
        console.log('新建用户');
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        });
      }
    };

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    };
  }
});
</script>

<style scoped></style>
