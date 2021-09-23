<template>
  <div>
    <h1 class="title">Hello World.</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped lang="scss">
$font-color: green;

div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: $font-color;
}
</style>
