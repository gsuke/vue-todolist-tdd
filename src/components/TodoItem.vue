<template>
  <label :for="uid" class="label justify-start">
    <input :id="uid" type="checkbox" checked="false" class="checkbox" />
    <div class="label-text ml-2">{{ text }}</div>
  </label>
</template>

<script>
const TodoItem = {
  props: {
    text: String,
  },
  computed: {
    uid() {
      return String(this.$.uid);
    },
  },
};
export default TodoItem;
</script>
