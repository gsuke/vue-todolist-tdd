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
  <div class="form-control">
    <div class="input-group">
      <input
        type="text"
        placeholder="例) 買い物に行く"
        class="input input-bordered"
        aria-label="New ToDo text"
      />
      <button class="btn btn-square px-1">追加</button>
    </div>
  </div>
  <TodoList :todo-list="todoList" />
</template>
