export function Forecast({ forecast, allIcons }) {
  let dailyForecast = {};

  for (let daily of forecast.list) {
    const date = new Date(daily.dt * 1000).toLocaleDateString();
    if (!dailyForecast[date]) {
      dailyForecast[date] = daily;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="w-[490px] flex flex-col justify-center bg-darkBox p-8 rounded-2xl shadow-shape">
      <h2 className="text-xl">Previsão Próximos 5 dias</h2>

      <div className="flex flex-col space-y-4 w-full">
        {nextFiveDays.map((forecast) => {
          const weatherIconCode = forecast.weather[0].icon;
          const weatherIcon = allIcons[weatherIconCode] || allIcons["01d"];
          return (
            <>
              <div
                key={forecast.dt}
                className="flex justify-between items-center space-y-2"
              >
                <p className="capitalize">{convertDate(forecast)}</p>

                <img src={weatherIcon} alt="weather icon" className="w-20" />
                <p className="capitalize">{forecast.weather[0].description}</p>

                <p>
                  {forecast.main.temp_min.toFixed()}/
                  {forecast.main.temp_max.toFixed()}
                </p>
              </div>
              <div className="h-[1px] w-full bg-slate-700" />
            </>
          );
        })}
      </div>
    </div>
  );
}