import { it, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/vue";
import TodoItem from "./TodoItem.vue";

describe("TodoItem", () => {
  afterEach(cleanup);

  function renderTodoItem(isDone = false, text = "Shopping") {
    render(TodoItem, { props: { isDone, text } });
  }

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
});
