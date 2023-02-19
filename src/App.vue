<script>
import { v4 as uuidv4 } from "uuid";
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
    addTodo() {
      this.todoList.push({
        id: uuidv4(),
        isDone: false,
        text: this.newTaskText,
      });
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
          class="btn btn-square btn-primary px-1"
          :disabled="newTaskText.length <= 0"
          @click="addTodo"
        >
          追加
        </button>
      </div>
    </div>

    <button class="btn btn-accent btn-sm mx-auto mb-5 block" disabled>
      完了済みタスクを削除する
    </button>

    <TodoList :todo-list="todoList" />
  </div>
</template>
