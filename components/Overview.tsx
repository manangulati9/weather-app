interface overviewPropTypes {
  temp: number;
  name: string;
  mainWeather: string;
  icon: string;
}

export default function ({ temp, name, mainWeather, icon }: overviewPropTypes) {
  return (
    <div className="text-white min-h-screen ml-8">
      <div className="m-3">the.weather</div>
      <div className="mt-[32rem]">
        <div className="flex items-center gap-4">
          <div className="text-[85px]">{temp.toFixed()}°</div>
          <div>
            <div className="text-[26px] font-semibold">{name}</div>
            <div className="flex text-[13px]">
              <GetTime /> -
              <GetDateDay />
            </div>
          </div>
          <div className="flex-col text-[13px]">
            <div>{icon}</div>
            <div>{mainWeather}</div>
          </div>
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
