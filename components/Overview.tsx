interface overviewPropTypes {
  temp: number;
  name: string;
  mainWeather: string;
  icon: string;
}

export default function ({ temp, name, mainWeather, icon }: overviewPropTypes) {
  return (
    <div className="sm:ml-24 sm:my-12 flex flex-col justify-between">
      <div>the.weather</div>
      <div className="flex sm:gap-5 sm:flex-row flex-col text-center items-center">
        <div className="sm:text-[95px] text-[80px] font-semibold ">
          {temp.toFixed()}°
        </div>
        <div>
          <div className="text-[26px] font-semibold sm:text-left text-center">
            {name}
          </div>
          <div className="flex sm:justify-between gap-3 justify-center ">
            <GetTime />
            <GetDateDay />
          </div>
        </div>
        <div className="flex flex-col flex-1 sm:ml-2 sm:mb-5">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={icon}
            className="h-14 w-14"
          />
          <div>{mainWeather}</div>
        </div>
      </div>
    </div>
  );
}

const getDay = (): string | undefined => {
  const day = new Date().getDay();
  switch (day) {
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
    case 7:
      return "Sunday";
      break;
    default:
      return undefined;
      break;
  }
};

const getMonth = (): string => {
  const date = new Date(2009, 10, 10); // 2009-11-10
  const month = date.toLocaleString("default", { month: "long" });
  return month;
};

function GetTime() {
  return (
    <div>
      {new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : new Date().getHours()}
      :
      {new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : new Date().getMinutes()}
    </div>
  );
}

function GetDateDay() {
  return (
    <div>
      {getDay()}, {new Date().getDate()} {getMonth().slice(0, 3)} '
      {new Date().getFullYear().toString().slice(2)}
    </div>
  );
}
