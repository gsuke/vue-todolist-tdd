import { it, describe } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/vue";
import TodoList from "./TodoList.vue";

describe("if there are no tasks", () => {
  function renderEmptyTodoList() {
    return render(TodoList, { props: { todoList: [] } });
  }

  it("is a <p> element", () => {
    const { container } = renderEmptyTodoList();
    expect(container.firstChild.nodeName).toBe("P");
  });

  it('renders "タスクがありません。" text', () => {
    renderEmptyTodoList();
    expect(screen.queryByText("タスクがありません。")).toBeTruthy();
  });
});

describe("if there are any tasks: [Buy an apple(done), Study math(undone), something, something, something]", () => {
  function renderTodoList() {
    return render(TodoList, {
      props: {
        todoList: [
          {
            id: "ffa03467-b6f0-4334-800d-6ab642dcbc7b",
            text: "Buy an apple",
            isDone: true,
          },
          {
            id: "36703c99-66c0-4ef0-88d2-34bd505d9957",
            text: "Study math",
            isDone: false,
          },
          {
            id: "2001d56c-c212-4364-8ddc-606c0886baef",
            text: "Something1",
            isDone: false,
          },
          {
            id: "ad3205aa-4465-4ee0-9f8e-c02c320311b2",
            text: "Something2",
            isDone: true,
          },
          {
            id: "dad7887d-f709-47a1-ae6a-efa3da81d21e",
            text: "Something3",
            isDone: true,
          },
        ],
      },
    });
  }

  it("is a <ul> element", () => {
    const { container } = renderTodoList();
    expect(container.firstChild.nodeName).toBe("UL");
  });

  it("renders 5 child elements", () => {
    renderTodoList();
    expect(document.querySelectorAll("ul > li").length).toBe(5);
  });

  it('renders a "Buy an apple" text in the 1st TodoItem', () => {
    renderTodoList();
    const todoItem = screen.getAllByRole("listitem")[0];
    expect(within(todoItem).queryByText("Buy an apple")).toBeTruthy();
  });

  it('renders a "Study math" text in the 2nd TodoItem', () => {
    renderTodoList();
    const todoItem = screen.getAllByRole("listitem")[1];
    expect(within(todoItem).queryByText("Study math")).toBeTruthy();
  });

  it("renders a checked checkbox in the 1st TodoItem", () => {
    renderTodoList();
    const todoItem = screen.getAllByRole("listitem")[0];
    expect(within(todoItem).getByRole("checkbox")).toBeChecked();
  });

  it("renders a unchecked checkbox in the 2nd TodoItem", () => {
    renderTodoList();
    const todoItem = screen.getAllByRole("listitem")[1];
    expect(within(todoItem).getByRole("checkbox")).not.toBeChecked();
  });

  it("emits click event, id and unchecked checkbox status when the 1st TodoItem's checkbox is clicked", async () => {
    const { getAllByRole, emitted } = renderTodoList();
    await fireEvent.click(
      within(getAllByRole("listitem")[0]).getByRole("checkbox")
    );
    expect(emitted("change")[0][0]).toStrictEqual({
      id: "ffa03467-b6f0-4334-800d-6ab642dcbc7b",
      isChecked: false,
    });
  });
});
