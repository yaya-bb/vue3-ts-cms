/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 18:08:29
 * @FilePath: \vue3-ts-cms\src\utils\date-format.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
// 时间格式化
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  // 对时间处理
  return dayjs.utc(utcString).utcOffset(8).format(format);
}
// 时间戳
// export function formatTimestamp(
//   timestamp: number,
//   _format: string = DATE_TIME_FORMAT
// ) {
//   return '';
// }
