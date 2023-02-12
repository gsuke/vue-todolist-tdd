import { expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import TodoItem from "./TodoItem.vue";

it("has a checkbox", () => {
  render(TodoItem);
  const checkbox = screen.queryByRole("checkbox");
  expect(checkbox).toBeTruthy();
});
