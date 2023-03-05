import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
// 时间格式化
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format);
}
// 时间戳
// export function formatTimestamp(
//   timestamp: number,
//   _format: string = DATE_TIME_FORMAT
// ) {
//   return '';
// }
