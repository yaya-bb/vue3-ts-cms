<template>
  <!-- 将formData传到表单 -->
  <!-- v-model组件实现双向绑定，而传过去的属性就是modelValue而不是formData -->
  <div class="page-search">
    <my-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </my-form>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    });

    return {
      formData
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
  /* margin具有穿透性 */
  padding: 0 50px 20px 0;
}
</style>
