import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Favorites from "./pages/Favorites";
import Compare from "./pages/Compare";
import SellVehicle from "./pages/SellVehicle";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Buy Vehicle */}
        <Route
          path="/vehicles"
          element={<Vehicles />}
        />

        {/* Vehicle Details */}
        <Route
          path="/vehicles/:id"
          element={<VehicleDetails />}
        />

        {/* Favorites */}
        <Route
          path="/favorites"
          element={<Favorites />}
        />

        {/* Compare */}
        <Route
          path="/compare"
          element={<Compare />}
        />

        {/* Sell Vehicle */}
        <Route
          path="/sell"
          element={<SellVehicle />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;