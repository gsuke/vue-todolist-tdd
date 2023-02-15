<template>
  <ul>
    <TodoItem v-for="todo in todoList" :key="todo.uuid"></TodoItem>
  </ul>
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
};

export default TodoList;
</script>
