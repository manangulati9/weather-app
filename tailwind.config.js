/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Thunderstorm': 'url("../public/weather_pics/thuderstorm.jpg")',
        'Drizzle': 'url("../public/weather_pics/drizzle.jpg")',
        'Rain': 'url("../public/weather_pics/rain.jpg")',
        'Snow': 'url("../public/weather_pics/snow.jpg")',
        'Mist': 'url("../public/weather_pics/mist.jpg")',
        'Clear': 'url("../public/weather_pics/clear.jpg")',
        'Clouds': 'url("../public/weather_pics/cloudy.jpg")',
      },
    },
  },
  plugins: [],
};
