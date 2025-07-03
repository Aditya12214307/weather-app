import { useState } from "react";

const API_KEY = "f88e755f398a8552e99e3c9d0d21cfd9"; // replace with your API key

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);

      const fore = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`);
      const foreData = await fore.json();
      setForecast(foreData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather };
}
