import axios from "axios";
import { useRef, useState } from "react";
import { WeatherInfo } from "./components/WeatherInfo";
import { Forecast } from "./components/Forecast";
import { TopButtons } from "./components/TopButtons";

export function App() {
  const [cityData, setCityData] = useState();
  const [forecast, setForecast] = useState();

  const inputRef = useRef();

  async function searchCity(data) {
    const city = data && inputRef.current.value;
    const key = "dde75ac00aba72930ff4a27e56ec4f1e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const fetchData = await axios.get(url);
    const forecastData = await axios.get(urlForecast);

    setCityData(fetchData.data);
    setForecast(forecastData.data);
  }

  return (
    <main className={`text-white h-screen bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 p-2`}>
      <div className="mx-auto max-w-screen-xl flex flex-col pt-16 space-y-20">
        <TopButtons inputRef={inputRef} searchCity={searchCity} setCityData={setCityData} />

        {cityData && <WeatherInfo cityData={cityData} />}
        {forecast && <Forecast forecast={forecast} />}
      </div>
    </main>
  );
}
