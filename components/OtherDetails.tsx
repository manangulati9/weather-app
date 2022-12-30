import { weatherType } from "../pages/interfaces";

export default function (props: { weatherData: weatherType }) {
  return (
    <div className="m-5 w-72">
      <div>Other Details</div>
      <div className="mt-8">
        <div className="flex justify-between my-3">
          <span>Rain</span>
          <span>{rain(props)} mm</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Visibility</span>
          <span>{props.weatherData.visibility / 1000} km</span>
        </div>
      </div>
    </div>
  );
}

const rain = (props: { weatherData: weatherType }): number | string => {
  const curRain = props.weatherData.rain;
  if (curRain !== undefined) {
    return curRain.oneh;
  } else {
    return "0";
  }
};
