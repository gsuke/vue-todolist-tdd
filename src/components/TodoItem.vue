<template>
  <li class="list-none">
    <label :for="id" class="label justify-start">
      <input
        :id="id"
        :checked="isDone"
        type="checkbox"
        class="checkbox"
        @change="change"
      />
      <div class="label-text ml-2" :class="{ 'line-through': isDone }">
        {{ text }}
      </div>
    </label>
  </li>
</template>

<script>
const TodoItem = {
  props: {
    id: String,
    isDone: Boolean,
    text: String,
  },
  methods: {
    change(event) {
      this.$emit("change", { id: this.id, isChecked: event.target.checked });
    },
  },
  emits: ["change"],
};
export default TodoItem;
</script>
