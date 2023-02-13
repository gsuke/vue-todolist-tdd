<template>
  <label :for="uid" class="label justify-start">
    <input
      :id="uid"
      :checked="isDone"
      type="checkbox"
      class="checkbox"
      @change="change"
    />
    <div class="label-text ml-2" :class="{ 'line-through': isDone }">
      {{ text }}
    </div>
  </label>
</template>

<script>
const TodoItem = {
  props: {
    isDone: Boolean,
    text: String,
  },
  computed: {
    uid() {
      return String(this.$.uid);
    },
  },
  methods: {
    change(event) {
      this.$emit("change", event.target.checked);
    },
  },
  emits: ["change"],
};
export default TodoItem;
</script>
