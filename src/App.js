import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

function App() {
  const [birthDay, onChangeBirthDay] = useState(new Date());
  const [ageInDays, onChangeAgeInDays] = useState(0);

  function handleChange(e) {
    console.log(e);
    console.log(ageInDays);
    onChangeBirthDay(e);

    // const formattedBirthDay = new Date(birthDay);
    const differenceInDates = new Date().getTime() - e.getTime();

    onChangeAgeInDays(differenceInDates / (1000 * 3600 * 24));
    console.log("difference in days", differenceInDates);
    console.log("age in days", ageInDays);
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
