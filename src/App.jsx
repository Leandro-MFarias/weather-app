import axios from "axios";
import { useRef, useState } from "react";
import { WeatherInfo } from "./components/WeatherInfo";
import { IoIosSearch } from "react-icons/io";
import { Forecast } from "./components/Forecast";

export function App() {
  const [cityData, setCityData] = useState();
  const [forecast, setForecast] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "dde75ac00aba72930ff4a27e56ec4f1e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const fetchData = await axios.get(url);
    const forecastData = await axios.get(urlForecast)

    setCityData(fetchData.data);
    setForecast(forecastData.data)
  }

  return (
    <main className={`text-white h-screen bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 p-2`}
    >
      <div className="mx-auto max-w-screen-xl flex flex-col items-center pt-16 space-y-20">

        <div className="flex justify-between w-full text-xl">
          <p>Tokyo</p>
          <p>New York</p>
          <p>Roma</p>
          <p>Paris</p>
          <p>Toronto</p>
        </div>

        <div className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite o nome da cidade"
            className="rounded-l-md outline-none text-zinc-400 px-6 py-2"
          />
          <button
            onClick={searchCity}
            className="rounded-r-md cursor-pointer bg-orange-500 hover:bg-orange-400 px-5 py-2.5 outline-none"
          >
            <IoIosSearch className="size-5" />
          </button>
        </div>

        {cityData && <WeatherInfo cityData={cityData} />}
        {forecast && <Forecast forecast={forecast} /> }
      </div>
    </main>
  );
}
