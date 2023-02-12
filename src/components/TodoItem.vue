<template>
  <label :for="uid" class="label justify-start">
    <input :id="uid" type="checkbox" checked="false" class="checkbox" />
    <div class="label-text ml-2">Sample Task</div>
  </label>
</template>

<script>
const TodoItem = {
  computed: {
    uid() {
      return String(this.$.uid);
    },
  },
};
export default TodoItem;
</script>
