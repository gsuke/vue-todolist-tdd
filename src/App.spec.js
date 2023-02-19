import { it, describe } from "vitest";
import { render, screen } from "@testing-library/vue";
import App from "./App.vue";

function renderApp() {
  return render(App);
}

describe("layout", () => {
  it('renders a "タスクがありません。" text', () => {
    renderApp();
    expect(screen.queryByText("タスクがありません。")).toBeTruthy();
  });
});
