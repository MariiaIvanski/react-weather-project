import React from "react";
import Weather from "./Weather";
import "./App.css";
import hogwarts from "./hogwarts.png";
import snitch from "./snitch.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="AppTitle d-flex justify-content-center align-items-center mb-2">
          <img src={hogwarts} alt="Hogwarts-coat-of-arms" width="50px" />
          <h1>Weather App</h1>
        </div>
        <Weather defaultCity="London" />

        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://inspiring-noyce-9d41a5.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariia Ivanski
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MariiaIvanski/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
      <img src={snitch} alt="snitch" width="50px" className="snitch" />
    </div>
  );
}
