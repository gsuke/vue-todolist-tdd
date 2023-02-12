import { expect, it, describe, afterEach } from "vitest";
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
});
