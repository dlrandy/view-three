<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
function add() {
  count.value++;
}
</script>

<template>
<div>
  <h1 @click="add">{{count}}</h1>
</div>
</template>

<style scoped>
h1{
  color: red;
}
</style>
 
