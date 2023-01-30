import "./App.css";
import React, { useState } from "react";

function App() {
  const [ageInYears, setAgeInYears] = useState(10);
  const [ageInDays, setAgeInDays] = useState();

  const handleChange = (e) => setAgeInYears(e.target.ageInYears);
  function calcAge() {
    const days = ageInYears * 365 + (ageInYears % 4);
    setAgeInDays(days);
    console.log(days);
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

        <p>{ageInDays}</p>

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
// function Square({ val, dataTestId, chooseSquare }) {
//   return (
//     <div
//       className="square"
//       data-testid={dataTestId}
//       id={dataTestId}
//       onClick={chooseSquare}
//     >
//       {val}
//     </div>
//   );
// }

export default App;
