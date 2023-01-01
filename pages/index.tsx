import Head from "next/head";
import { GetStaticProps } from "next";
import WeatherApp from "../components/WeatherApp";
import { dateTimeType, weatherType } from "../interfaces_&_funcs/interfaces";
import { useEffect, useState } from "react";
import { getNewData } from "../interfaces_&_funcs/data_fetch_funcs";

export const getStaticProps: GetStaticProps = async () => {
  const initData = await getNewData("london");
  return {
    props: {
      initData,
    },
  };
};

export default function Home(props: {
  initData: { weatherData: weatherType; dateTimeData: dateTimeType };
}) {
  const [location, setlocation] = useState("london");
  const [weatherData, setWeatherData] = useState(props.initData.weatherData);
  const [dateTimeData, setdateTimeData] = useState(props.initData.dateTimeData);
  useEffect(() => {
    getNewData(location).then((res) => {
      setWeatherData(res.weatherData);
      setdateTimeData(res.dateTimeData);
    });
  }, [location]);
  return (
    <>
      <Head>
        <title>the.weather</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeatherApp
        weatherData={weatherData}
        dateTimeData={dateTimeData}
        setlocation={(loc) => {
          setlocation(loc);
        }}
      />
    </>
  );
}
