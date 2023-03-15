/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-06 23:28:47
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-14 21:16:44
 * @FilePath: \vue3-ts-cms\src\hooks\use-permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useStore } from '@/store';

export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const verifyPermission = `system:${pageName}:${hanldeName}`;

  // name = "yaya"
  // !name -> false
  // !!name -> true
  return !!permissions.find((item) => item === verifyPermission);
}
