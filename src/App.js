import "./App.css";

function calcAge(age) {
  return age * 365;
}
console.log(calcAge(10));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Age to days.</p>
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
