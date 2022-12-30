import OtherDetails from "./OtherDetails";
import { weatherType } from "../pages/interfaces";
import WeatherDetails from "./WeatherDetails";
import Locations from "./Locations";
import SearchBar from "./SearchBar";
import { Dispatch, SetStateAction } from "react";

export default function (props: {
  weatherData: weatherType;
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="text-white backdrop-blur-lg">
      <SearchBar setlocation={props.setlocation} />
      <Locations setlocation={props.setlocation} />
      <hr className="mx-5" />
      <WeatherDetails weatherData={props.weatherData} />
      <hr className="mx-5" />
      <OtherDetails weatherData={props.weatherData} />
    </div>
  );
}
