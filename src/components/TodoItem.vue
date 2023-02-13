<template>
  <label :for="uid" class="label justify-start">
    <input :id="uid" v-model="isDone" type="checkbox" class="checkbox" />
    <div class="label-text ml-2">{{ text }}</div>
  </label>
</template>

<script>
const TodoItem = {
  props: {
    text: String,
    isDone: Boolean,
  },
  computed: {
    uid() {
      return String(this.$.uid);
    },
  },
};
export default TodoItem;
</script>
