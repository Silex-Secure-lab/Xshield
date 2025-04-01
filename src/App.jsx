import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Architecture from "./pages/Architecture";
import VigilanceTowers from "./pages/VigilanceTowers";
import CivilianVehicle from "./pages/CivilianVehicle";
import Defense from "./pages/DefensiveFighting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/architectural_armour" element={<Architecture />} />
        <Route path="/vigilance_towers" element={<VigilanceTowers />} />
        <Route path="/civilian_vehicle" element={<CivilianVehicle />} />
        <Route path="/defensive_fighting" element={<Defense />} />
      </Routes>
    </Router>
  );
}

export default App;
