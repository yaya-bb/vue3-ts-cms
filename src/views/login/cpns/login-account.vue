<template>
  <div class="login-account">
    <!-- 需要进行验证，所以需要用到了el-form-item -->
    <!-- rules和props结合进行验证；获取最新值用:model -->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// 为了下面通过使用el-form进行验证，因此要获取对象
import { ElForm } from 'element-plus';

import { rules } from '../config/account-config';

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = () => {
      // 通过使用el-form.value获取对象，而validate是el-form中的属性用于验证，返回的结果valid是boolean类型
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑');
        }
      });
    };

    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style scoped></style>
