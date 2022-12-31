import OtherDetails from "./OtherDetails";
import { weatherType } from "../interfaces_&_funcs/interfaces";
import WeatherDetails from "./WeatherDetails";
import Locations from "./Locations";
import SearchBar from "./SearchBar";
import { Dispatch, SetStateAction } from "react";

export default function (props: {
  weatherData: weatherType;
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="backdrop-blur-md flex flex-col gap-6">
      <SearchBar setlocation={props.setlocation} />
      <Locations setlocation={props.setlocation} />
      <hr className="mx-6" />
      <WeatherDetails weatherData={props.weatherData} />
      <hr className="mx-6" />
      <OtherDetails weatherData={props.weatherData} />
    </div>
  );
}
