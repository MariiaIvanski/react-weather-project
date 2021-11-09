import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row d-flex justify-content-between">
        <div className="col-auto">
          <h1 className="mb-3">{props.data.city}</h1>
        </div>
        <div className="col-auto">
          <i className="fas fa-bolt"></i>
        </div>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 d-flex justify-content-around">
        <div className="col-6">
          <div className="d-flex justify-content-start">
            <WeatherIcon code={props.data.icon} size={64} />

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 ml-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
            <li>Owls: intermittent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
