import { it, describe } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
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

  it("renders a disabled Add button", () => {
    renderApp();
    expect(screen.getByRole("button", { name: "追加" })).toBeDisabled();
  });
});

describe("interaction", () => {
  it("renders an enabled Add button when there is text in the text field", async () => {
    renderApp();
    const user = userEvent.setup();
    await user.type(screen.queryByLabelText("New ToDo text"), "Shopping");
    expect(screen.getByRole("button", { name: "追加" })).toBeEnabled();
  });
});
