/* eslint-disable prettier/prettier */
import { App } from 'vue';
import 'element-plus/theme-chalk/base.css';
import { ElButton, ElCheckbox } from 'element-plus/lib/index';

const components = [ElButton, ElCheckbox];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
