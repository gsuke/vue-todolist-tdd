import { it, describe } from "vitest";
import { render, screen, within } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import App from "./App.vue";

const user = userEvent.setup();

describe("init layout", () => {
  it('renders a "タスクがありません。" text', () => {
    render(App);
    expect(screen.queryByText("タスクがありません。")).toBeTruthy();
  });

  it("renders a text field to add new ToDo", () => {
    render(App);
    expect(screen.queryByLabelText("New ToDo text")).toBeTruthy();
  });

  it("renders a button to add new Todo", () => {
    render(App);
    expect(screen.queryByRole("button", { name: "追加" })).toBeTruthy();
  });

  it("renders a disabled Add button", () => {
    render(App);
    expect(screen.getByRole("button", { name: "追加" })).toBeDisabled();
  });
});

describe("interaction", () => {
  async function renderAppAndInputText() {
    const { getByLabelText } = render(App);
    const textField = getByLabelText("New ToDo text");
    await user.type(textField, "Shopping");
  }

  it("enables the Add button when there is text in the text field", async () => {
    await renderAppAndInputText();
    expect(screen.getByRole("button", { name: "追加" })).toBeEnabled();
  });

  it("renders a text in the text field when the text is entered", async () => {
    await renderAppAndInputText();
    expect(screen.queryByLabelText("New ToDo text")).toHaveValue("Shopping");
  });

  describe("when a Todo is added", () => {
    async function renderAppAndAddTodo() {
      const { getByLabelText, getByRole, queryByRole } = render(App);
      const textField = getByLabelText("New ToDo text");
      const addButton = getByRole("button", { name: "追加" });
      await user.type(textField, "Shopping");
      await user.click(addButton);
      const listItem = queryByRole("listitem");
      return { textField, listItem };
    }

    it("empties the text field when the Add button is clicked", async () => {
      const { textField } = await renderAppAndAddTodo();
      expect(textField).toHaveValue("");
    });

    it("renders new ToDo item", async () => {
      await renderAppAndAddTodo();
      expect(screen.queryAllByRole("listitem").length).toBe(1);
    });

    it("renders correct new Todo text", async () => {
      const { listItem } = await renderAppAndAddTodo();
      expect(within(listItem).queryByText("Shopping")).toBeTruthy();
    });

    it("renders a unchecked checkbox", async () => {
      const { listItem } = await renderAppAndAddTodo();
      expect(within(listItem).queryByRole("checkbox")).not.toBeChecked();
    });
  });
});
