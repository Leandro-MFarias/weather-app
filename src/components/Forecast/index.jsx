export function Forecast({ forecast }) {
  console.log(forecast);

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
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className=" max-w-screen-lg self-start space-y-6">
      <h2 className="text-xl">Previsão Próximos 5 dias</h2>
      <div className="h-[1px] w-screen max-w-screen-xl bg-white" />

      <div className="flex justify-between w-screen max-w-screen-xl gap-x-10">
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className="space-y-2">
            <p className="capitalize">{convertDate(forecast)}</p>

            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="weather icon"
              className="w-20"
            />
            <p className="capitalize">{forecast.weather[0].description}</p>

            <p>
              {forecast.main.temp_min.toFixed()} °C min /{" "}
              {forecast.main.temp_max.toFixed()} °C máx
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
