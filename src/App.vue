<script>
import TodoItem from "./components/TodoItem.vue";

const App = {
  data() {
    return {
      isDone: false,
    };
  },
  components: {
    TodoItem,
  },
  methods: {
    change(isDone) {
      this.isDone = isDone;
    },
  },
};

export default App;
</script>

<template>
  <TodoItem v-model:is-done="isDone" text="Sample Task" @change="change" />
</template>
