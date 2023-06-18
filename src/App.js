import React, { useState } from "react";
import Home from "./components/home";
import DescarcareFluturas from "./components/pdfPages/DescarcareFluturas.js";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import AddUser from "./components/users/AddUser";
import AllUsers from "./components/users/AllUsers";
import Documente from "./components/Documente";
import DescarcareContractAngajare from "./components/pdfPages/DescarcareContractAngajare.js";
import EditUser from "./components/users/EditUser";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/Descarcare-Fluturas" element={<DescarcareFluturas />} />
        <Route path="/Documente" element={<Documente />} />
        <Route
          path="/Descarcare-Contract-Angajare"
          element={<DescarcareContractAngajare />}
        />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
