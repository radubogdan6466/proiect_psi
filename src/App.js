import React, { useState } from "react";
import Home from "./components/home";
import CrearePdf from "./components/pdfPages/CrearePdf";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import AddUser from "./components/users/AddUser";
import AllUsers from "./components/users/AllUsers";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/creare-pdf" element={<CrearePdf />} />
      </Routes>
    </div>
  );
};

export default App;
