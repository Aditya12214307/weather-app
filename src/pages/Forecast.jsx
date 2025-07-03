import { useState, useEffect } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import HourlyForecast from "../components/weather/HourlyForecast";
import useWeather from "../hooks/useWeather";

export default function Forecast() {
  const [location, setLocation] = useState("");
  const { forecast, loading, error, fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    fetchWeather(location);
    setLocation(""); // Clear after submit
  };

  // Optional: auto focus input
  useEffect(() => {
    document.getElementById("forecast-input")?.focus();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        <Input
          id="forecast-input"
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit" disabled={!location || loading}>
          {loading ? "Loading..." : "Search"}
        </Button>
      </form>

      {error && (
        <p className="text-red-400 text-center font-medium">{error}</p>
      )}

      {forecast && forecast.city && (
        <>
          <div className="text-center text-gray-300">
            <h2 className="text-xl font-semibold mb-2">
              5-Day Forecast for {forecast.city.name}, {forecast.city.country}
            </h2>
            <p>
              Showing hourly intervals every 3 hours ({forecast.list.length} entries)
            </p>
          </div>
          <HourlyForecast forecast={forecast} />
        </>
      )}
    </div>
  );
}
