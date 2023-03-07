/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-06 15:31:32
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-07 10:07:09
 * @FilePath: \vue3-ts-cms\src\global\register-element.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable prettier/prettier */
import { App } from 'vue';
// element-plus样式引入
import 'element-plus/dist/index.css';
import { ElAvatar, ElTabs, ElTabPane, ElForm, ElFormItem, ElInput, ElCheckbox, ElLink, ElButton, ElContainer, ElHeader, ElMain, ElAside, ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup, ElRadio, ElDropdown, ElDropdownItem, ElDropdownMenu,  ElRow, ElCol, ElSelect, ElOption, ElDatePicker, ElBreadcrumb, ElBreadcrumbItem, ElTable, ElTableColumn, ElPagination, ElImage } from 'element-plus/lib/index';
const components = [
  ElButton,
  ElAvatar,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
