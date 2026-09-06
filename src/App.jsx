import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countdown from "./pages/Countdown";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
