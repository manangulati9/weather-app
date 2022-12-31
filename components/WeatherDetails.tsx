import { weatherType } from "../interfaces_&_funcs/interfaces";

export default function (props: { weatherData: weatherType }) {
  return (
    <div className="px-6">
      <div>Weather Details</div>
      <div className="mt-8">
        <div className="flex justify-between my-3">
          <span>Min Temp</span>
          <span>{props.weatherData.main.temp_min}°C</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Max Temp</span>
          <span>{props.weatherData.main.temp_max}°C</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Cloudy</span>
          <span>{props.weatherData.clouds.all}%</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Humidity</span>
          <span>{props.weatherData.main.humidity}%</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Wind</span>
          <span>{props.weatherData.wind.speed} km/h</span>
        </div>
      </div>
    </div>
  );
}
