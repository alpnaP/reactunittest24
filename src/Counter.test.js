import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Counter } from "./Counter";
test("Initial value should be 0", () => {
  render(<Counter />);
  const counterEl = screen.getByText(0);
  expect(counterEl).toBeInTheDocument();
});

test("On click, it should increamente counter by 1", () => {
  render(<Counter />);
  const btnEl = screen.getByTestId("btn");
  const counterEl = screen.getByTestId("cnt");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("1");
});
