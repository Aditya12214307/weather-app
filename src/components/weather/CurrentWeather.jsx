import WeatherIcon from "./WeatherIcon";
import StatCard from "./StatCard";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaWind,
  FaTemperatureLow,
  FaEye,
  FaTachometerAlt,
  FaSun,
  FaMoon,
  FaSmog,
} from "react-icons/fa";

export default function CurrentWeather({ weather }) {
  if (!weather) return null;

  const date = new Date(weather.dt * 1000);
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);
  const aqi = weather.air?.main?.aqi || 3;

  const aqiMap = {
    1: { label: "Good", color: "text-green-400" },
    2: { label: "Fair", color: "text-yellow-400" },
    3: { label: "Moderate", color: "text-orange-400" },
    4: { label: "Poor", color: "text-red-400" },
    5: { label: "Very Poor", color: "text-pink-500" },
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-lg space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</h2>
          <p className="text-gray-300 text-lg capitalize">{weather.weather[0].description}</p>
        </div>
        <WeatherIcon icon={weather.weather[0].icon} description={weather.weather[0].description} />
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          {date.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {weather.name}, {weather.sys.country}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        <StatCard title="Feels Like" value={`${Math.round(weather.main.feels_like)}°C`} icon={<FaTemperatureLow />} />
        <StatCard title="Humidity" value={`${weather.main.humidity}%`} icon={<FaSmog />} />
        <StatCard title="Pressure" value={`${weather.main.pressure} hPa`} icon={<FaTachometerAlt />} />
        <StatCard title="Visibility" value={`${weather.visibility / 1000} km`} icon={<FaEye />} />
        <StatCard title="Wind" value={`${weather.wind.speed} m/s`} icon={<FaWind />} />
        <StatCard
          title="Sunrise"
          value={sunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          icon={<FaSun />}
        />
        <StatCard
          title="Sunset"
          value={sunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          icon={<FaMoon />}
        />
        <StatCard
          title="AQI"
          value={aqiMap[aqi]?.label || "N/A"}
          icon={<FaSmog />}
          className={aqiMap[aqi]?.color}
        />
      </div>
    </div>
  );
}
