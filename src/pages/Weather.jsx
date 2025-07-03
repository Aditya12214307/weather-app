import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import CurrentWeather from "../components/weather/CurrentWeather";
import useWeather from "../hooks/useWeather";

const API_KEY = "f88e755f398a8552e99e3c9d0d21cfd9";

export default function Weather() {
  const [location, setLocation] = useState("");
  const { weather, loading, error, fetchWeather, history } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location.trim()) return;
    fetchWeather(location);
  };

  const getLocationWeather = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error("Failed to fetch current location weather");

        const data = await res.json();
        setLocation(data.name);
        fetchWeather(data.name);
      } catch (err) {
        console.error("Geolocation fetch error:", err);
        alert("Failed to fetch weather from location.");
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        🌦️ Check Current Weather
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
        <Input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit" disabled={!location || loading}>
          {loading ? "Loading..." : "Search"}
        </Button>
        <Button type="button" onClick={getLocationWeather}>
          Use Current Location
        </Button>
      </form>

      {history.length > 0 && (
        <div className="text-sm text-gray-300 flex flex-wrap items-center gap-2 mt-2">
          <span className="text-gray-400 mr-2">Recent Searches:</span>
          {history.map((city, idx) => (
            <button
              key={idx}
              onClick={() => fetchWeather(city)}
              className="underline hover:text-blue-400 transition duration-200"
            >
              {city}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-400 text-center font-medium">{error}</p>
      )}

      {weather && <CurrentWeather weather={weather} />}
    </div>
  );
}
