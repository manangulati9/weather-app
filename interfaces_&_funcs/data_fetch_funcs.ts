import { locInfoType, weatherType } from "./interfaces";

export const initDataFetch = async () => {
  const locData = await fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=47f8de715097b1fb3ea299d7bf6bf53d"
  );
  const locationInfo: locInfoType[] = await locData.json();
  return locationInfo;
};
const getLocationInfo = async (location: string) => {
  const locData = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=47f8de715097b1fb3ea299d7bf6bf53d`
  );
  const locationInfo: locInfoType[] = await locData.json();
  return locationInfo;
};
export async function getWeatherData(locationInfo: locInfoType[]) {
  const currentWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${locationInfo[0].lat}&lon=${locationInfo[0].lon}&appid=47f8de715097b1fb3ea299d7bf6bf53d&units=metric`
  );
  const initWeatherData: weatherType = await currentWeatherData.json();
  return initWeatherData;
}
export const getNewWeather = async (location: string) => {
  const locationInfo = await getLocationInfo(location);
  const initWeatherData = await getWeatherData(locationInfo);
  return initWeatherData;
};
