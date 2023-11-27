<script setup lang="ts" name="App">
import Home from "./components/Home.vue";

import { useDefer } from "./hooks/index";

const defer = useDefer(500);
</script>

<template>
  <div>
    <template v-for="item in 500">
      <Home v-if="defer(item)" />
    </template>
  </div>
</template>
<style scoped></style>
