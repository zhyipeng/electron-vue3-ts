<template>
  <div class="content-edit">
    <el-input class="file-title" v-model="currentTitle" placeholder="请输入标题"></el-input>
    <v-md-editor v-bind="$attrs" height="calc(100vh - 56px)"></v-md-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const currentTitle = ref('');
    currentTitle.value = props.title || '';

    return {
      currentTitle,
    };
  },
  watch: {
    currentTitle(newValue: string) {
      console.log(newValue);
      this.$emit('update:title', newValue);
    },
  },
});
</script>

<style scoped>
.file-title {
  padding-left: 5px;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  font-weight: 500;
}

.file-title >>> .el-input__inner {
  height: inherit;
  line-height: inherit;
  font-weight: inherit;
  border: none;
}

.content-edit {
  height: 100vh;
}
</style>

<style>
.v-md-editor {
  box-shadow: none;
}
</style>
