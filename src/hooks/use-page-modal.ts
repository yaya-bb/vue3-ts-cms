/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-11 11:43:37
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-13 09:26:56
 * @FilePath: \vue3-ts-cms\src\hooks\use-page-modal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue';
import PageModal from '@/components/page-modal';

type CallbackFn = () => void;

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    console.log('handleNewData');
    // 当有值的时候，进行调用
    newCb && newCb();
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    console.log('handleEditData');
    editCb && editCb();
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
