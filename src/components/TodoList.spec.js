import { it, describe, afterEach } from "vitest";
import { render, cleanup, screen, within } from "@testing-library/vue";
import TodoList from "./TodoList.vue";

describe("TodoList", () => {
  afterEach(cleanup);

  function renderTodoList() {
    return render(TodoList, {
      props: {
        todoList: [
          {
            uuid: "ffa03467-b6f0-4334-800d-6ab642dcbc7b",
            text: "Buy an apple",
            isDone: true,
          },
          {
            uuid: "36703c99-66c0-4ef0-88d2-34bd505d9957",
            text: "Study math",
            isDone: false,
          },
          {
            uuid: "2001d56c-c212-4364-8ddc-606c0886baef",
            text: "Something1",
            isDone: false,
          },
          {
            uuid: "ad3205aa-4465-4ee0-9f8e-c02c320311b2",
            text: "Something2",
            isDone: true,
          },
          {
            uuid: "dad7887d-f709-47a1-ae6a-efa3da81d21e",
            text: "Something3",
            isDone: true,
          },
        ],
      },
    });
  }

  describe("layout", () => {
    it("is a <ul> element", () => {
      const { container } = renderTodoList();
      expect(container.firstChild.nodeName).toBe("UL");
    });

    describe("[Buy an apple(done), Study math(undone), something, something, something]", () => {
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

      it("renders a unchecked checkbox in the 2st TodoItem", () => {
        renderTodoList();
        const todoItem = screen.getAllByRole("listitem")[1];
        expect(within(todoItem).getByRole("checkbox")).not.toBeChecked();
      });
    });
  });
});
