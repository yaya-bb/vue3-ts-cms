<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-03-05 19:43:27
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-03-07 08:54:54
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
    <template>
      <div class="user">
        <!-- 配置传给给page-search组件 -->
        <page-search
          :searchFormConfig="searchFormConfig"
          @resetBtnClick="handleResetClick"
          @queryBtnClick="handleQueryClick"
        />
        <!-- 绑定ref -->
        <page-content
          ref="pageContentRef"
          :contentTableConfig="contentTableConfig"
          pageName="users"
        ></page-content>
      </div>
    </template>

    <script lang="ts">
    import { defineComponent } from 'vue'

    import PageSearch from '@/components/page-search'
    import PageContent from '@/components/page-content'

    import { searchFormConfig } from './config/search.config'
    import { contentTableConfig } from './config/content.config'

    import { usePageSearch } from '@/hooks/use-page-search'

    export default defineComponent({
      name: 'users',
      components: {
        PageSearch,
        PageContent
      },
      setup() {
        const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

        return {
          searchFormConfig,
          contentTableConfig,
          pageContentRef,
          handleResetClick,
          handleQueryClick
        }
      }
    })
    </script>

    <style scoped></style>
