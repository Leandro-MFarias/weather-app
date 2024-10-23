import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";

export function WeatherDetails({ cityData }) {
  if (!cityData || !cityData.main) {
    return null;
  }

  return (
    <div className="space-y-6 bg-darkBox p-6 rounded-2xl shadow-shape">
      <h2 className="text-lg text-zinc-400 font-semibold">Condições do Ar</h2>

      <div className="space-y-12">
        <div className="px-8 flex justify-between max-w-3xl">
          <div className="flex flex-col space-x-2 space-y-1">
            <div className="text-xl text-zinc-400 flex items-center space-x-2">
              <FaThermometerEmpty className="size-6" />
              <p>Sensação Térmica</p>
            </div>
            <p className="text-2xl font-medium text-zinc-100 pl-7">
              {cityData.main.feels_like.toFixed()}°C
            </p>
          </div>

          <div className=" flex flex-col space-x-2 space-y-1">
            <div className="text-xl text-zinc-400 flex items-center space-x-2">
              <BiSolidDropletHalf className="size-6" />
              <p>Umidade</p>
            </div>
            <p className="text-2xl font-medium text-zinc-100 pl-7">
              {cityData.main.humidity}%
            </p>
          </div>
        </div>

        <div className="px-8 flex justify-between max-w-3xl">
          <div className="flex flex-col space-y-1">
            <div className="text-xl text-zinc-400 flex items-center space-x-2">
              <FiWind className="size-6" />
              <p>Pressão</p>
            </div>
            <p className="text-2xl font-medium text-zinc-100 pl-10">
              {cityData.main.pressure} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}