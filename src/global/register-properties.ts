/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 09:57:06
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-05 10:37:56
 * @FilePath: \vue3-ts-cms\src\global\register-properties.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';

import { formatUtcString } from '@/utils/date-format';

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    // 对时间进行格式化
    formatTime(value: string) {
      return formatUtcString(value);
    }
  };
}
