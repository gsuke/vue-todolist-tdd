<template>
  <ul v-if="todoList.length > 0">
    <TodoItem
      v-for="todo in todoList"
      :key="todo.uuid"
      :text="todo.text"
      :is-done="todo.isDone"
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
};

export default TodoList;
</script>
