import React, { useState } from "react";
import CrearePdf from "./pdfPages/CrearePdf";
import style from "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <header>
          <h1>Admin panel</h1>
        </header>
        <section>
          <h2>Panou management informatii angajati</h2>
          <Link to="/creare-pdf">
            Genereaza fluturas pentru salariu angajati
          </Link>
        </section>
        <footer>
          <p>Alte actiuni</p>
          <ul>
            <li>Intrudu angajat nou</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
