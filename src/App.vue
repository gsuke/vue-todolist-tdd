<script>
import TodoList from "./components/TodoList.vue";

const App = {
  data() {
    return {
      todoList: [],
    };
  },
  components: {
    TodoList,
  },
};

export default App;
</script>

<template>
  <TodoList :todo-list="todoList" />
</template>
