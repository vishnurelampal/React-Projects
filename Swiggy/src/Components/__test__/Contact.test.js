import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("Should have a heading componet in contact us", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("Check for a button", () => {
  render(<Contact />);
  console.log(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
