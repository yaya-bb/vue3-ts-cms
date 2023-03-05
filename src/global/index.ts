/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-06 15:15:23
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-05 09:59:21
 * @FilePath: \vue3-ts-cms\src\global\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable prettier/prettier */
import { App } from 'vue';
import registerElement from './register-element';
import registerProperties from './register-properties';
export function globalRegister(app: App): void {
  app.use(registerElement);
  app.use(registerProperties);
}
