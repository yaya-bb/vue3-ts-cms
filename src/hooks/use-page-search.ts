/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-06 22:09:16
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-07 08:34:36
 * @FilePath: \vue3-ts-cms\src\hooks\use-page-search.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue';
import PageContent from '@/components/page-content';

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  // 重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  // 搜索
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };
  // 页面将其返回
  return [pageContentRef, handleResetClick, handleQueryClick];
}
