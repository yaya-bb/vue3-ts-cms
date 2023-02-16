/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-02 11:52:10
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-16 21:37:38
 * @FilePath: \vue3-ts-cms\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true
});
const path = require('path');

module.exports = {
  // 1.配置方式一: CLI提供的属性
  // outputDir: './build',
  // publicPath: './',
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components');
  }
};
