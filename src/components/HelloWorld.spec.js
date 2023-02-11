import { expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";

it("sample test", () => {
  render(HelloWorld, { props: { msg: "Hello Vue" } });
  const header = screen.queryByRole("heading", { name: "Hello Vue" });
  expect(header).toBeTruthy();
});
