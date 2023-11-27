<script setup lang="ts">
import Home from "./components/Home.vue";
import { useDefer } from "./hooks/index";

const defer = useDefer(100);
</script>

<template>
  <div class="test">
    <div v-for="(item, index) in 100" :key="item">
      <Home v-if="defer(index)"></Home>
    </div>
  </div>
</template>
<style scoped></style>
