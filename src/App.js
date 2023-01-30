import "./App.css";
import React, { useState } from "react";

function App() {
  const [ageInYears, setAgeInYears] = useState("");
  const [ageInDays, setAgeInDays] = useState();

  function handleChange(e) {
    setAgeInYears(e.target.value);
  }

  function calcAge() {
    // TODO - fix logic to calculate leap years based on every 4th year
    const days = ageInYears * 365 + Math.floor(ageInYears / 4);
    setAgeInDays(days);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age to days</h1>
        <input
          value={ageInYears}
          onChange={handleChange}
          type="number"
          id="yourAge"
          placeholder="age in years"
        ></input>

        <button onClick={calcAge}>Days</button>

        <p>You're {ageInDays} days old.</p>

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
