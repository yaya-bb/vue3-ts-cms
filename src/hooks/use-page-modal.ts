/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-11 11:43:37
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-14 18:45:23
 * @FilePath: \vue3-ts-cms\src\hooks\use-page-modal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue';
import PageModal from '@/components/page-modal';

type CallbackFn = (item?: any) => void;

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    };
    newCb && newCb();
  };
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    };
    editCb && editCb(item);
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData];
}
