<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-16 12:03:43
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-16 21:57:11
 * @FilePath: \vue3-ts-cms\src\views\login\cpns\login-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <!-- ref作绑定 -->
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 是否记住密码
    const isKeepPassword = ref(true);
    // InstanceType使用对象实例的类型；
    // 如何获取组件的类型？ typeof LoginAccount获取对象的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>();

    const handleLoginClick = () => {
      // 与组件的联系就是获取组件对象调用组件对象中的方法
      // accountRef.value获取对象
      accountRef.value?.loginAction();
    };

    return {
      isKeepPassword,
      handleLoginClick,
      accountRef
    };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
