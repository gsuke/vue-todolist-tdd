import { it, describe } from "vitest";
import { render, screen, within } from "@testing-library/vue";
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
  it("enables the Add button when there is text in the text field", async () => {
    renderApp();
    const user = userEvent.setup();
    await user.type(screen.queryByLabelText("New ToDo text"), "Shopping");
    expect(screen.getByRole("button", { name: "追加" })).toBeEnabled();
  });

  it("renders a text in the text field when the text is entered", async () => {
    renderApp();
    const user = userEvent.setup();
    await user.type(screen.queryByLabelText("New ToDo text"), "Shopping");
    expect(screen.queryByLabelText("New ToDo text")).toHaveValue("Shopping");
  });

  it("empties the text field when the Add button is clicked", async () => {
    renderApp();
    const user = userEvent.setup();

    const textField = screen.queryByLabelText("New ToDo text");
    const addButton = screen.getByRole("button", { name: "追加" });

    await user.type(textField, "Shopping");
    await user.click(addButton);

    expect(textField).toHaveValue("");
  });

  describe("when a Todo is added", () => {
    it("renders new ToDo item", async () => {
      renderApp();
      const user = userEvent.setup();

      const textField = screen.queryByLabelText("New ToDo text");
      const addButton = screen.getByRole("button", { name: "追加" });

      await user.type(textField, "Shopping");
      await user.click(addButton);

      expect(screen.queryAllByRole("listitem").length).toBe(1);
    });

    it("renders correct new Todo text", async () => {
      renderApp();
      const user = userEvent.setup();

      const textField = screen.queryByLabelText("New ToDo text");
      const addButton = screen.getByRole("button", { name: "追加" });

      await user.type(textField, "Shopping");
      await user.click(addButton);

      const listItem = screen.getAllByRole("listitem")[0];

      expect(within(listItem).queryByText("Shopping")).toBeTruthy();
    });

    it("renders a unchecked checkbox", async () => {
      renderApp();
      const user = userEvent.setup();

      const textField = screen.queryByLabelText("New ToDo text");
      const addButton = screen.getByRole("button", { name: "追加" });

      await user.type(textField, "Shopping");
      await user.click(addButton);

      const listItem = screen.getAllByRole("listitem")[0];

      expect(within(listItem).queryByRole("checkbox")).not.toBeChecked();
    });
  });
});
