import { it, describe } from "vitest";
import { render, screen } from "@testing-library/vue";
import App from "./App.vue";

function renderApp() {
  return render(App);
}

describe("init layout", () => {
  it('renders a "タスクがありません。" text', () => {
    renderApp();
    expect(screen.queryByText("タスクがありません。")).toBeTruthy();
  });

  it("renders a text field to add new ToDo", () => {
    renderApp();
    expect(screen.queryByLabelText("New ToDo text")).toBeTruthy();
  });

  it("renders a button to add new Todo", () => {
    renderApp();
    expect(screen.queryByRole("button", { name: "追加" })).toBeTruthy();
  });

  it("renders a disabled button to add new Todo", () => {
    renderApp();
    expect(screen.getByRole("button", { name: "追加" })).toBeDisabled();
  });
});
