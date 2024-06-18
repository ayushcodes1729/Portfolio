import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import Intro from "./components/intro";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="container relative bg-[#5F6168] m-0 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
