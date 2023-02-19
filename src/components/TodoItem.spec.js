import { it, describe, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/vue";
import TodoItem from "./TodoItem.vue";

describe("TodoItem", () => {
  afterEach(cleanup);

  function renderTodoItem(isDone = false, text = "Shopping") {
    return render(TodoItem, {
      props: { id: "9731860b-3658-4029-8e74-29e10e22e777", isDone, text },
    });
  }

  describe("layout", () => {
    it("renders a checkbox", () => {
      renderTodoItem();
      expect(screen.queryByRole("checkbox")).toBeTruthy();
    });

    it("renders a received ToDo text", () => {
      renderTodoItem(false, "Shopping");
      expect(screen.queryByText("Shopping")).toBeTruthy();
    });

    it("renders a checked checkbox if the task is done", () => {
      renderTodoItem(true);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("renders a unchecked checkbox if the task is not done", () => {
      renderTodoItem(false);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("is a <li> element", () => {
      const { container } = renderTodoItem();
      expect(container.firstChild.nodeName).toBe("LI");
    });
  });

  describe("interaction", () => {
    it("emits click event and checked checkbox status when the unchecked checkbox is clicked", async () => {
      const { getByRole, emitted } = renderTodoItem(false);
      await fireEvent.click(getByRole("checkbox"));
      expect(emitted("change")[0][0]).toBeTruthy();
    });

    it("emits click event and unchecked checkbox status when the checked checkbox is clicked", async () => {
      const { getByRole, emitted } = renderTodoItem(true);
      await fireEvent.click(getByRole("checkbox"));
      expect(emitted("change")[0][0]).toBeFalsy();
    });
  });
});
