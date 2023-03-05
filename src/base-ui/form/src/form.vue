<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-27 20:21:48
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-05 23:01:19
 * @FilePath: \vue3-ts-cms\src\base-ui\form\src\form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="my-form">
    <div class="header"><slot name="header"></slot></div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :xs="24" :lg="8" :sm="24" :xl="6" md="12">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- v-model绑定属性，通过field动态进行获取，从formData取出属性，做双向绑定 -->
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer"><slot name="footer"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IFormItem } from '../types';

export default defineComponent({
  props: {
    // 在form中进行接收 -> 需要取出属性
    modelValue: {
      type: Object,
      // 必须传
      require: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 24/6=4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  // 单向数据流
  // 实现双向绑定
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 拷贝一份
    const formData = ref({ ...props.modelValue });
    // 监听数据变化，将数据发送出去
    watch(
      formData,
      (newValue) => {
        console.log(newValue);
        // 当数据发生变化
        emit('update:modelValue', newValue);
      },
      {
        deep: true
      }
    );

    return {
      formData
    };
  }
});
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
}
</style>
