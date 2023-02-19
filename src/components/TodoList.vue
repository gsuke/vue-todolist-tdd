<template>
  <ul v-if="todoList.length > 0">
    <TodoItem
      v-for="todo in todoList"
      :id="todo.uuid"
      :key="todo.uuid"
      :text="todo.text"
      :is-done="todo.isDone"
      @change="change"
    ></TodoItem>
  </ul>
  <p v-else>タスクがありません。</p>
</template>

<script>
import TodoItem from "./TodoItem.vue";

const TodoList = {
  props: {
    todoList: Array,
  },
  components: {
    TodoItem,
  },
  methods: {
    change(parameters) {
      this.$emit("change", parameters);
    },
  },
  emits: ["change"],
};

export default TodoList;
</script>
