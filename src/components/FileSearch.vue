<template>
  <div class="search-container">
    <el-input placeholder="请输入内容" v-bind="$attrs">
      <template #append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
    <el-dropdown>
      <el-button
        type="primary"
        icon="el-icon-circle-plus-outline"
        circle
        class="dropdown-btn"
      ></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="createFile">新建笔记</el-dropdown-item>
          <el-dropdown-item divided @click="importFile">导入文件</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    function createFile() {
      emit('create');
    }

    function importFile() {
      emit('import');
    }

    return {
      createFile,
      importFile,
    };
  },
});
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  padding: 12px 10px;
  background-color: #daecfe;
}

.dropdown-btn {
  margin-left: 10px;
  padding: 6px;
  font-size: 14px;
  border-radius: 30%;
}

.el-input > div {
  padding: 0;
}
</style>
