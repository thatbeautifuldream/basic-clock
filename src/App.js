import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const current = new Date();
  const time = current.toLocaleTimeString();
  const [cTime, setCTime] = useState(time);
  setTimeout(() => {
    setCTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{cTime}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
