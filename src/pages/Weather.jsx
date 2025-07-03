import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import CurrentWeather from "../components/weather/CurrentWeather";
import useWeather from "../hooks/useWeather";

const API_KEY = "f88e755f398a8552e99e3c9d0d21cfd9"; // Replace with your OpenWeatherMap API key

export default function Weather() {
  const [location, setLocation] = useState("");
  const { weather, loading, error, fetchWeather, history } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
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

        if (!res.ok)
          throw new Error("Failed to fetch current location weather");

        const data = await res.json();
        setLocation(data.name); // sets input box value
        fetchWeather(data.name); // triggers full fetchWeather flow
      } catch (err) {
        console.error("Geolocation fetch error:", err);
        alert("Failed to fetch weather from location.");
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
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
        <div className="flex gap-2 flex-wrap text-sm text-gray-300">
          <p className="mr-2 text-gray-400">Recent:</p>
          {history.map((city, idx) => (
            <button
              key={idx}
              onClick={() => fetchWeather(city)}
              className="hover:text-primary underline"
            >
              {city}
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-red-400">{error}</p>}
      {weather && <CurrentWeather weather={weather} />}
    </div>
  );
}
