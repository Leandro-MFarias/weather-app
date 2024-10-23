export function WeatherInfo({ cityData, allIcons }) {
  if (!cityData || !cityData.weather || !cityData.main || cityData.weather.length === 0) {
    return <h2 className="text-center text-3xl">Cidade não encontrada</h2>;
  }

  const weatherIconCode = cityData.weather[0].icon
  const weatherIcon = allIcons[weatherIconCode] || allIcons['01d']

  return (
    <div className="px-8 pr-2 flex justify-between items-center">
      <div className="flex flex-col justify-around h-72">
        <div className="space-y-2">
          <h2 className="text-4xl text-zinc-200 font-bold">
            {cityData.name}, {cityData.sys.country}
          </h2>
          <p className="capitalize text-zinc-400">{cityData.weather[0].description}</p>
        </div>

        <p className="pl-4 text-6xl text-zinc-200 font-semibold">
          {cityData.main.temp.toFixed()}°
        </p>
      </div>

      <img
        src={weatherIcon}
        alt="weather icon"
        className="w-52"
      />
    </div>
  );
}
