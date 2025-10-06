import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Competitions from "./pages/Competitions";
import SpeedDating from "./pages/SpeedDating";
import JudgesSponsors from "./pages/JudgesSponsors";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/speed-dating" element={<SpeedDating />} />
        <Route path="/judges-sponsors" element={<JudgesSponsors />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
