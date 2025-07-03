import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import HourlyForecast from "../components/weather/HourlyForecast";
import useWeather from "../hooks/useWeather";

export default function Forecast() {
  const [location, setLocation] = useState("");
  const { forecast, loading, error, fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(location);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit" disabled={!location || loading}>
          {loading ? "Loading..." : "Search"}
        </Button>
      </form>

      {error && <p className="text-red-400">{error}</p>}
      {forecast && <HourlyForecast forecast={forecast} />}
    </div>
  );
}
