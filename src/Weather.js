import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "578088b56e619e7ac44051a64e860eb6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function importLocationWeather() {
    function retrievePosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "a2d283df905dedf8786b96ad24673f92";
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      axios.get(url).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="p-2 bd-highlight">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            <div className="p-2 bd-highlight">
              <input
                type="button"
                value="Local"
                className="btn btn-success"
                onClick={importLocationWeather}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="d-flex justify-content-center">
        <Loader
          type="Circles"
          color="#c6a513"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}
