import { expect, it, describe, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/vue";
import TodoItem from "./TodoItem.vue";

describe("TodoItem", () => {
  beforeEach(() => {
    render(TodoItem);
  });
  afterEach(cleanup);

  it("has a checkbox", () => {
    const checkbox = screen.queryByRole("checkbox");
    expect(checkbox).toBeTruthy();
  });
});
