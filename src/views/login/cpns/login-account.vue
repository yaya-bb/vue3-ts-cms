<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-16 12:03:43
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-27 18:55:59
 * @FilePath: \vue3-ts-cms\src\views\login\cpns\login-account.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-account">
    <!-- 需要进行验证，所以需要用到了el-form-item -->
    <!-- rules和props结合进行验证；获取最新值用:model -->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// 为了下面通过使用el-form进行验证，因此要获取对象
import { ElForm } from 'element-plus';
import LocalCache from '@/utils/cache';
import { rules } from '../config/account-config';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    // 获取vuex中的store
    const store = useStore();
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      // 通过使用el-form.value获取对象，而validate是el-form中的属性用于验证，返回的结果valid是boolean类型
      formRef.value?.validate((valid: any) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存localStorage
            LocalCache.setCache('name', account.name);
            LocalCache.setCache('password', account.password);
          } else {
            LocalCache.deleteCache('name');
            LocalCache.getCache('password');
          }
          // 2.开始进行登录验证,account默认是响应式对象，因此需要将它解构
          store.dispatch('login/accountLoginAction', { ...account });
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
