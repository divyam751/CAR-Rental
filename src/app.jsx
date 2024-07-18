import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Vehicle from "./pages/Vehicle";
import Testimonial from "./pages/Testimonial";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/testimonials" element={<Testimonial />} />
      </Routes>

      <Footer />
    </div>
  );
}
