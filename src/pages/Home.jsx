import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">🌍 Weather-App</h1>
      <p className="text-gray-300 mb-6">Get current weather and 5-day forecast instantly</p>
      <div className="flex gap-4">
        <Link to="/weather">
          <Button>Current Weather</Button>
        </Link>
        <Link to="/forecast">
          <Button>5-Day Forecast</Button>
        </Link>
      </div>
    </div>
  );
}
