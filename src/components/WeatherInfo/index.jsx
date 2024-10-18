import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";

export function WeatherInfo({ cityData }) {
  return (
    <div className="flex flex-col items-center space-y-20">
      <h2 className="text-4xl">
        {cityData.name}, {cityData.sys.country}
      </h2>

      <div className="ml-16 flex items-center justify-between max-w-screen-xl w-screen">
        <div className="flex items-center space-y-1">
          <img
            src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
            alt="weather icon"
            className="size-16"
          />
          <p className="capitalize">{cityData.weather[0].description}</p>
        </div>

        <p className="text-3xl font-semibold">
          {cityData.main.temp.toFixed()}°C
        </p>

        <div className="space-y-2 font-light">
          <div className="text-base flex items-center space-x-2">
            <FaThermometerEmpty />
            <p>Sensação Térmica: <strong className="font-medium">{cityData.main.feels_like.toFixed()}°C</strong></p>
          </div>

          <div className="text-base flex items-center space-x-2">
            <BiSolidDropletHalf />
            <p>Umidade: <strong className="font-medium">{cityData.main.humidity}%</strong></p>
          </div>

          <div className="text-base flex items-center space-x-2">
            <FiWind />
            <p>Pressão: <strong className="font-medium">{cityData.main.pressure}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
