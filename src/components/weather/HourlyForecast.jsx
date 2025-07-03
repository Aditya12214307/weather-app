import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast({ forecast }) {
  const hourly = forecast.list.slice(0, 8); // 24 hrs at 3-hour intervals

  return (
    <div className="bg-card p-6 rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Today's Hourly Forecast</h2>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {hourly.map((hour, i) => (
          <div key={i} className="min-w-[100px] bg-dark-800 p-4 rounded-lg text-center">
            <p className="text-sm">{new Date(hour.dt * 1000).getHours()}:00</p>
            <WeatherIcon icon={hour.weather[0].icon} size="medium" />
            <p className="text-sm">{Math.round(hour.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
