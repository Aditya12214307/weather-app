export default function WeatherIcon({ icon, description = "", size = "large" }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const sizeClass = size === "large" ? "w-20 h-20" : "w-12 h-12";

  return <img src={iconUrl} alt={description} className={sizeClass} />;
}
