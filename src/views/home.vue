<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <el-affix>
        <file-search v-model="searchTitle"></file-search>
      </el-affix>
      <file-list :file-list="fileList" class="file-list"></file-list>
    </div>
    <div class="main-container">
      <file-edit
        v-model="fileItem.content"
        v-model:title="fileItem.title"
        @change="onSubmit"
      ></file-edit>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, Ref,
} from 'vue';
import FileSearch from '../components/FileSearch.vue';
import FileList from '../components/FileList.vue';
import FileEdit from '../components/FileEdit.vue';

export default defineComponent({
  components: {
    FileSearch,
    FileList,
    FileEdit,
  },
  setup() {
    const searchTitle = ref('');
    const fileList: Ref<Array<{title: string, time: string}>> = ref([]);

    fileList.value.push(...[
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
      { title: 'test1', time: '2021-01-01' },
    ]);

    const fileItem = reactive({
      title: '',
      content: '',
    });

    function onSubmit(val: Event) {
      console.log(val);
      console.log(fileItem);
    }

    return {
      searchTitle,
      fileList,
      fileItem,
      onSubmit,
    };
  },
});
</script>

<style scoped>
.app-wrapper {
  display: flex;
}

.sidebar-container {
  width: 300px;
  height: 100vh;
  border-right: 1px solid #eaeefb;
}

.main-container {
  flex: 1;
}

.file-list {
  height: calc(100vh - 56px);
}
</style>
