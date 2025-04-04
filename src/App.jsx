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
import Corporate from "./pages/CorporateDivision";
import PatrolTruck from "./pages/PatrolTruck";
import WarHorse from "./pages/WarHorse";
import BulletProof from "./pages/BulletProof";
import Autonomous from "./pages/Autonomous";
import Blanket from "./pages/Blanket";

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
        <Route path="/corporate_division" element={<Corporate />} />
        <Route path="/patrol_truck" element={<PatrolTruck />} />
        <Route path="/war_horse" element={<WarHorse />} />
        <Route path="/bulletproof" element={<BulletProof />} />
        <Route path="/autonomous" element={<Autonomous />} />
        <Route path="/shield_blanket" element={<Blanket />} />
      </Routes>
    </Router>
  );
}

export default App;
