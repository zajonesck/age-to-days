import { render, screen } from "@testing-library/react";
import App from "./App";
import "./App.css";

test("renders GitHub link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Check out my GitHub here/i);
  expect(linkElement).toBeInTheDocument();
});
