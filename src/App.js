import React, { useState } from "react";
import PDFFile from "./components/pdfPages/PDFFile";
import Home from "./components/home";
import CrearePdf from "./components/pdfPages/CrearePdf";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creare-pdf" element={<CrearePdf />} />
        {/* Alte rute */}
      </Routes>
    </div>
  );
};

export default App;
