import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://inspiring-noyce-9d41a5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Mariia Ivanski
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MariiaIvanski/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
