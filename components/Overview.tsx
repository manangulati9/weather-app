import { dateTimeType, weatherType } from "../interfaces_&_funcs/interfaces";

export default function (props: {
  weatherData: weatherType;
  dateTimeData: dateTimeType;
}) {
  return (
    <div className="sm:ml-24 sm:my-12 flex flex-col justify-between">
      <div className="sm: m-0 ml-5 my-3">the.weather</div>
      <div className="flex sm:gap-5 sm:flex-row flex-col text-center items-center">
        <div className="sm:text-[95px] text-[80px] font-semibold ">
          {props.weatherData.main.temp.toFixed()}°
        </div>
        <div>
          <div className="text-[26px] font-semibold sm:text-left text-center">
            {props.weatherData.name}
          </div>
          <div className="flex sm:justify-between gap-1 justify-center ">
            <DateTime dateTimeData={props.dateTimeData} />
          </div>
        </div>
        <div className="flex flex-col flex-1 sm:ml-2 sm:mb-5">
          <img
            src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
            alt={props.weatherData.weather[0].icon}
            className="h-14 w-14"
          />
          <div>{props.weatherData.weather[0].main}</div>
        </div>
      </div>
    </div>
  );
}

const DateTime = (props: { dateTimeData: dateTimeType }) => {
  const dateobj = new Date(props.dateTimeData.formatted);

  const month = (dateobj: Date) => {
    const month = dateobj.toLocaleString("default", { month: "long" });
    return month.slice(0, 3);
  };

  const day = (dateobj: Date) => {
    const dayNum = dateobj.getDay();
    switch (dayNum) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;
      default:
        return "";
        break;
    }
  };

  return (
    <div className="flex gap-2 justify-evenly">
      <span>{props.dateTimeData.formatted.slice(11, 16)}</span>
      <span>-</span>
      <span>
        {day(dateobj)}, {dateobj.getDate()} {month(dateobj)}'{" "}
        {dateobj.getFullYear().toString().slice(2)}
      </span>
    </div>
  );
};
