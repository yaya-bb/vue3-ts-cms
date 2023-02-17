/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-17 12:52:42
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-17 13:11:44
 * @FilePath: \vue3-ts-cms\src\utils\cache.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 类具有更强的封装性；localStorage缓存
class LocalCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  // 获取
  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      // string 转换成 obj
      return JSON.parse(value);
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }
  clearCache() {
    window.localStorage.clear();
  }
}
// 导出
export default new LocalCache();
