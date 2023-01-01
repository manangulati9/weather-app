import { dateTimeType, locInfoType, weatherType } from "./interfaces";

const getLocationInfo = async (location: string) => {
  const locDataResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=47f8de715097b1fb3ea299d7bf6bf53d`
  );
  const locData: locInfoType[] = await locDataResponse.json();
  return locData;
};
async function getWeatherData(locData: locInfoType[]) {
  const weatherDataResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${locData[0].lat}&lon=${locData[0].lon}&appid=47f8de715097b1fb3ea299d7bf6bf53d&units=metric`
  );
  const weatherData: weatherType = await weatherDataResponse.json();
  return weatherData;
}
const getDateTime = async (lat: number, lon: number) => {
  const dateTimeRespone = await fetch(
    `https://api.timezonedb.com/v2.1/get-time-zone?key=RL2PWSWKLE8K&format=json&by=position&lat=${lat}&lng=${lon}`
  );
  const dateTimeData: dateTimeType = await dateTimeRespone.json();
  return dateTimeData;
};
export const getNewData = async (location: string) => {
  const locData = await getLocationInfo(location);
  const weatherData = await getWeatherData(locData);
  const dateTimeData = await getDateTime(
    weatherData.coord.lat,
    weatherData.coord.lon
  );
  return { weatherData, dateTimeData };
};
