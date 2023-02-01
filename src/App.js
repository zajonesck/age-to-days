import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

function App() {
  const [birthDay, onChangeBirthDay] = useState(new Date());
  let ageInDays;

  function handleChange(e) {
    onChangeBirthDay(e.target.value);
    const formattedBirthDay = new Date(birthDay);
    const differenceInDates =
      new Date().getTime() - formattedBirthDay.getTime();

    ageInDays = differenceInDates / (1000 * 3600 * 24);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age to days</h1>
        <h3>Enter your birthday</h3>
        <DatePicker onChange={handleChange} value={birthDay} />

        <p>You're {Math.floor(ageInDays)} days old</p>

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
