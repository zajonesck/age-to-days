import React from "react";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import App from "./App";
import "./App.css";

describe("age to days", () => {
  // test("renders GitHub link", () => {
  //   render(<App />);
  //   const linkElement = screen.getByText(/Check out my GitHub here/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
  test("age in future", () => {
    render(<App />);
    //pick a future date
    const tomorrow = new Date();

    // add 10 days to today
    tomorrow.setDate(new Date().getDate() + 10);

    console.log(tomorrow);
    //verify handlechange is called
    //verify age in days is negative
  });
  // test("present date", () => {
  //   render(<App />);
  //   const differenceInDays !> 0;
  //   expect(differenceInDays).toBeInTheDocument();
  // });
  // test("past date", () => {
  //   render(<App />);
  //   const differenceInDays !> 0;
  //   expect(differenceInDays).toBeInTheDocument();
  // });
});
