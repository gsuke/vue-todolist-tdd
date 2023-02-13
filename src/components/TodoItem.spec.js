import { it, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/vue";
import TodoItem from "./TodoItem.vue";

describe("TodoItem", () => {
  afterEach(cleanup);

  it("has a checkbox", () => {
    render(TodoItem);
    const checkbox = screen.queryByRole("checkbox");
    expect(checkbox).toBeTruthy();
  });

  it("shows a received ToDo text", () => {
    render(TodoItem, { props: { text: "Shopping" } });
    const text = screen.queryByText("Shopping");
    expect(text).toBeTruthy();
  });

  it("renders a checked checkbox if the task is done", () => {
    render(TodoItem, { props: { isDone: true } });
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("renders a unchecked checkbox if the task is not done", () => {
    render(TodoItem, { props: { isDone: false } });
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
});
