<template>
  <label :for="uid" class="label justify-start">
    <input :id="uid" type="checkbox" :checked="isDone" class="checkbox" />
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
