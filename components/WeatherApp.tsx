import Overview from "./Overview";
import Card from "./WeatherCard";
import { weatherType } from "../interfaces_&_funcs/interfaces";
import { Dispatch, SetStateAction } from "react";
import BackgroundPage from "./Background";

export default function (props: {
  weatherData: weatherType;
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="sm:flex justify-between font-product-sans min-h-screen text-white/90">
      <BackgroundPage
        weather={props.weatherData.weather[0].main.toLowerCase()}
      />
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
