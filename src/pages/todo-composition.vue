<template>
  <h1>
    新的composition todolist
  </h1>
  <Counter />
  <TodoList />
</template>
<script setup lang="ts">
import Counter from '../components/Counter.vue';
import TodoList from '../components/Todolist.vue';
</script>