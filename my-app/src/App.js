import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./features/Navbar";
import HomePage from "./screens/HomePage";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import SupportUs from "./screens/SupportUs";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<SupportUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
