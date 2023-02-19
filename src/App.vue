<script>
import TodoList from "./components/TodoList.vue";

const App = {
  data() {
    return {
      todoList: [],
      newTaskText: "",
    };
  },
  components: {
    TodoList,
  },
  methods: {
    addTask() {
      this.newTaskText = "";
    },
  },
};

export default App;
</script>

<template>
  <div class="mx-auto max-w-lg p-3">
    <!-- Add ToDo -->
    <div class="form-control mb-3">
      <div class="input-group">
        <input
          v-model="newTaskText"
          type="text"
          placeholder="例) 買い物に行く"
          class="input input-bordered w-full"
          aria-label="New ToDo text"
        />
        <button
          class="btn btn-square px-1"
          :disabled="newTaskText.length <= 0"
          @click="addTask"
        >
          追加
        </button>
      </div>
    </div>

    <TodoList :todo-list="todoList" />
  </div>
</template>
