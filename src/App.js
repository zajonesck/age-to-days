import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

function App() {
  const [ageInYears, setAgeInYears] = useState("");
  const [ageInDays, setAgeInDays] = useState();

  const [value, onChange] = useState(new Date());

  function handleChange(e) {
    setAgeInYears(e.target.value);
  }

  function calcAge() {
    // TODO - fix logic to calculate leap years based on every 4th year
    const days = ageInYears * 365 + Math.floor(ageInYears / 4);
    setAgeInDays(days);
  }
  // To set two dates to two variables
  const date1 = new Date();

  //make date2 equal the input from date picker
  let date2 = new Date("07/30/2019");
  console.log("date1", date1);

  console.log("date2", date2);

  let differenceInTime = date1.getTime() - date2.getTime();

  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  console.log(
    "Total number of days between dates " +
      date1 +
      date2 +
      " is: " +
      differenceInDays
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age to days</h1>
        <h3>Enter your birthday</h3>
        <DatePicker onChange={onChange} value={value} />

        <button onClick={calcAge}>Days</button>

        <p>You're {ageInDays} days old</p>

        <a
          className="App-link"
          href="https://github.com/zajonesck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub here
        </a>
      </header>
    </div>
  );
}

export default App;
