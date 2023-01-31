import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

function App() {
  const [value, onChange] = useState(new Date());

  function handleChange(e) {
    onChange(e.target.value);
  }

  // To set two dates to two variables
  const date1 = new Date();

  //make date2 equal the input from date picker
  let date2 = new Date(value);
  let differenceInTime = date1.getTime() - date2.getTime();

  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age to days</h1>
        <h3>Enter your birthday</h3>
        <DatePicker onChange={onChange} value={value} />

        <p>You're {Math.floor(differenceInDays)} days old</p>

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
