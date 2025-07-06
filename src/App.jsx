import { useState } from "react";
import HomePage from "./Components/HomePage";
import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Product from "./Components/Product";
import Partnership from "./Components/Partnership";
import Team from "./Components/Team";
import Roadmap from "./Components/Roadmap";
import Contact from "./Components/Contact";

function App() {
  return (
  

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/partners" element={<Partnership/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/roadmap" element={<Roadmap/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
