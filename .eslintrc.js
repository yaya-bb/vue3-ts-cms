/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-16 14:31:10
 * @FilePath: \vue3-ts-cms\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭命名规则
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off'
  }
};
