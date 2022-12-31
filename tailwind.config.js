/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'thunderstorm': 'url("../public/weather_pics/thuderstorm.jpg")',
        'drizzle': 'url("../public/weather_pics/drizzle.jpg")',
        'rain': 'url("../public/weather_pics/rain.jpg")',
        'snow': 'url("../public/weather_pics/snow.jpg")',
        'mist': 'url("../public/weather_pics/mist.jpg")',
        'clear': 'url("../public/weather_pics/clear.jpg")',
        'clouds': 'url("../public/weather_pics/cloudy.jpg")',
        'haze': 'url("../public/weather_pics/haze.jpg")',
        'ash': 'url("../public/weather_pics/ash.jpg")',
        'dust': 'url("../public/weather_pics/dust.jpg")',
        'fog': 'url("../public/weather_pics/fog.jpg")',
        'tornado': 'url("../public/weather_pics/tornado.jpg")',
      },
      fontFamily:{
        'product-sans':["product-sans, sans-serif"],
      },
    },
  },
  plugins: [],
};
