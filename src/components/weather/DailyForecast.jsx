import WeatherIcon from "./WeatherIcon";

export default function DailyForecast({ forecast }) {
  const daily = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 5); // 5 days

  return (
    <div className="bg-card p-6 rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {daily.map((day, i) => (
          <div key={i} className="min-w-[120px] bg-dark-800 p-4 rounded-lg flex flex-col items-center text-center">
            <p className="text-md font-semibold">{new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: "short" })}</p>
            <WeatherIcon icon={day.weather[0].icon} description={day.weather[0].main} size="medium" />
            <p className="text-sm capitalize text-gray-300">{day.weather[0].main}</p>
            <p className="text-lg font-bold">{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
