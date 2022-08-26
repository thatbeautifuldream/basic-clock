import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const current = new Date(); // creating a new date object
  const time = current.toLocaleTimeString(); // the time in the current locale
  const [cTime, setCTime] = useState(time); // setting the time in the state
  setTimeout(() => {
    setCTime(new Date().toLocaleTimeString()); // updating the time in the state
  }, 1000); // updating the time every second

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
