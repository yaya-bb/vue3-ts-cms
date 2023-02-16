<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-16 12:03:43
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-16 12:09:35
 * @FilePath: \vue3-ts-cms\src\views\login\cpns\login-phone.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-form label-width="60px">
    <el-form-item label="手机号" prop="num">
      <el-input v-model="phone.num" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    });

    return {
      phone
    };
  }
});
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
