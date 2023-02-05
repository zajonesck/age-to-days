import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "./App";

import "./App.css";

describe("age to days", () => {
  test("on render date is set to today", () => {
    render(<App />);
    const datePicker = screen.getByTestId("datePicker");

    const ageInDays = screen.getByText(/You're 0 days old/i);

    expect(ageInDays).toBeInTheDocument();
    expect(datePicker).toBeInTheDocument();
  });

  test("setting date in future should set age negative", () => {
    render(<App />);
    //rendering future date
    const mockedTendaysAway = jest.fn();
    const tenDaysAway = new Date();
    const datePicker = screen.getByTestId("datePicker");

    tenDaysAway.setDate(new Date().getDate() + 10);
    console.log("datepicker", datePicker.defaultValue);
    console.log(tenDaysAway);
    //verify handlechange is called
    expect(mockedTendaysAway).toHaveBeenCalledTimes(0);

    //verify age in days is negative
  });

  // test("past date", () => {
  //   render(<App />);
  //   const differenceInDays !> 0;
  //   expect(differenceInDays).toBeInTheDocument();
  // });
});
describe("other tests", () => {
  test("renders GitHub link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Check out my GitHub here/i);
    expect(linkElement).toBeInTheDocument();
  });
});
