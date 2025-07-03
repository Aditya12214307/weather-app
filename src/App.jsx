import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Forecast from "./pages/Forecast";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
