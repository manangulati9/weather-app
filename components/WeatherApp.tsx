import Overview from "./Overview";
import Card from "./WeatherCard";
import { weatherType } from "../pages/interfaces";
import { Dispatch, SetStateAction } from "react";

export default function (props: {
  weatherData: weatherType;
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex justify-between bg-Rain bg-center bg-contain">
      <Overview
        temp={props.weatherData.main.temp}
        name={props.weatherData.name}
        mainWeather={props.weatherData.weather[0].main}
        icon={props.weatherData.weather[0].icon}
      />
      <Card {...props} />
    </div>
  );
}
