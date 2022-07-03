<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <li v-for="todo in todos" v-bind:key="todo.title">
        <label :class="{ done: todo.done }">
          <input type="checkbox" v-model="todo.done" />{{ todo.title }}</label
        >
      </li>
    </ul>
    <div v-else>
        暂无数据
    </div>
    <!-- <div>
        {{todos.filter(v => !v.done).length}}
        /
        {{todos.length}}
    </div> -->
    <div>
        全选<input type="checkbox" v-model="allDone">
        {{active}} / {{all}}
    </div>
    <button v-if="active<all" @click="clear">清理</button>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      title: "",
      todos: [
        { title: "吃饭", done: false },
        { title: "睡觉", done: true },
      ],
    };
  },
  computed:{
    active(){
        return this.todos.filter((todo:any) => !todo.done).length;
    },
    all(){
        return this.todos.length;
    },
    allDone:{
        get: function () {
            return this.active === 0;
        },
        set: function (val:boolean) {
            this.todos.forEach(todo => {
                todo.done = val;
            });
        }
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.title,
        done: false,
      });
      this.title = "";
    },
    clear(){
        this.todos = this.todos.filter(v=>!v.done);
    },
  },
};
</script>

<style>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
