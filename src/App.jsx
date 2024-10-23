import axios, { all } from "axios";
import { useState } from "react";
import { WeatherInfo } from "./components/WeatherInfo";
import { Forecast } from "./components/Forecast";
import { Input } from "./components/Input";
import { Buttons } from "./components/Buttons";
import { WeatherDetails } from "./components/WeatherDetails";

import sun from "./assets/sun-icon.svg";
import cloud from "./assets/cloud-icon.svg";
import flatWeather from "./assets/flat-weather-icon.svg";
import layeredClouds from "./assets/layered-clouds.svg";
import partly from "./assets/partly-cloudy-icon.svg";
import rain from "./assets/rain-clouds.svg";
import sunRainCloud from "./assets/sun-rain-cloud.svg";
import snowflake from "./assets/snowflake.svg";

export function App() {
  const [cityData, setCityData] = useState({});
  const [forecast, setForecast] = useState({});
  const [city, setCity] = useState("");
  const [isFormSubmited, setIsFormSubmmited] = useState(false);

  const allIcons = {
    "01d": sun,
    "01n": sun,
    "02d": partly,
    "02n": partly,
    "03d": cloud,
    "03n": cloud,
    "04d": layeredClouds,
    "04n": layeredClouds,
    "09d": rain,
    "09n": rain,
    "10d": sunRainCloud,
    "10n": sunRainCloud,
    "13d": snowflake,
    "11d": flatWeather,
  };

  async function searchCity(city) {
    const key = "dde75ac00aba72930ff4a27e56ec4f1e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const fetchData = await axios.get(url);
      const forecastData = await axios.get(urlForecast);
  
      setCityData(fetchData.data);
      setForecast(forecastData.data);
      setIsFormSubmmited(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return
      }
      setCityData({});
      setForecast({});
      setIsFormSubmmited(false);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!city.trim()) return;

    searchCity(city);
    setTimeout(() => {
      setIsFormSubmmited(true);
    }, 1000);
  }

  return (
    <main className="bg-customDark text-slate-50 h-screen px-6 pt-14 space-y-6">
      <div className="flex space-x-8">
        <form className="flex space-x-6" onSubmit={handleFormSubmit}>
          <Buttons searchCity={searchCity} />

          <div className="w-screen max-w-screen-lg space-y-6">
            <Input setCity={setCity} city={city} />
            {isFormSubmited && (
              <>
                <WeatherInfo cityData={cityData} allIcons={allIcons} />
                <WeatherDetails cityData={cityData} />
              </>
            )}
          </div>
        </form>
        <div className="flex items-center">
          {isFormSubmited && (
            <Forecast forecast={forecast} allIcons={allIcons} />
          )}
        </div>
      </div>
    </main>
  );
}
