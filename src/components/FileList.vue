<template>
  <el-scrollbar
    class="file-list"
    wrap-class="scrollbar-filelist"
    :noresize="false"
    tag="ul"
  >
    <li v-for="(item, index) in fileList" :key="index" class="file-item">
      <i class="el-icon-document item-icon"></i>
      <p class="item-title">{{ item.title }}</p>
      <p class="item-time">{{ item.time }}</p>
    </li>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    fileList: {
      type: Array as PropType<Array<{title: string, time: string}>>,
      default: () => [],
    },
  },
  setup() {
  },
});
</script>

<style scoped>
.file-list {
  user-select: none;
}

.file-item {
  display: flex;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid #eaeefb;
  justify-content: center;
  text-align: left;
}

.item-icon {
  margin-left: 20px;
  margin-right: 12px;
}

.item-title {
  flex: 1;
  margin-right: 5px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.item-time {
  width: 80px;
  font-size: 12px;
}
</style>
