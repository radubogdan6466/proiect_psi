import React, { useState } from "react";
import Home from "./components/home";
import CrearePdf from "./components/pdfPages/CrearePdf";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/creare-pdf" element={<CrearePdf />} />
      </Routes>
    </div>
  );
};

export default App;
