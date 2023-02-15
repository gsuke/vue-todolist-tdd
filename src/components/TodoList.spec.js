import { it, describe, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";
import TodoList from "./TodoList.vue";

describe("TodoList", () => {
  afterEach(cleanup);

  function renderTodoList() {
    return render(TodoList);
  }

  describe("layout", () => {
    it("is a <ul> element", () => {
      const { container } = renderTodoList();
      expect(container.firstChild.nodeName).toBe("UL");
    });
  });
});
