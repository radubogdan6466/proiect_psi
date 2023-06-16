import React, { useState } from "react";
import CrearePdf from "./pdfPages/CrearePdf";
import style from "../index.css";
import { Link } from "react-router-dom";
import AddUser from "./users/AddUser";
import AllUsers from "./users/AllUsers";

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
          <AddUser />
          <AllUsers />
        </footer>
      </div>
    </div>
  );
};

export default Home;
